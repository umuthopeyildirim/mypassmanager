import { useLayoutEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from 'react-firebase-hooks/firestore';
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../utils/Auth";
import { app } from "../utils/FirebaseConfig";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import DashboardBar from "../components/dashboard/DashboardBar";
// import DashboardHero from "../components/dashboard/dashboard/DashboardHero";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardPasswordList from "../components/dashboard/dashboard/DashboardPasswordList";
import DashboardPassword from "../components/dashboard/dashboard/DashboardPassword";
import DashboardAddNewPasswordModal from "../components/dashboard/dashboard/DashboardAddNewPasswordModal";
import Loading from "../components/loading/Loading";

function Landing(){
    const [user, loading] = useAuthState(auth);
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [toogleAddNewPassword, setToogleAddNewPassword] = useState(false);
    // const [filteredPasswords, setFilteredPasswords] = useState([]);
    // const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const db = getFirestore(app);
    const [value, vLoading, error] = useDocument(
        user ? doc(getFirestore(app), 'passwords', user.uid) : null
    );

    // const handleSetSearch = (e) => {    
    //     setSearch(e.target.value);
    // };

    useLayoutEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        if (vLoading) return;
        // setFilteredPasswords(value);
    }, [user, value, vLoading, loading, error, navigate]);

    // useEffect(() => {
    //     if(search.length > 1){
    //         const filtered = value.data().passwords.filter((element)=>{
    //             return element.name.toLowerCase().includes(search.toLowerCase());
    //         })
    //         setFilteredPasswords(filtered);
    //     }
    //     else{
    //         setFilteredPasswords(value);
    //     }
    // }, [search])

    const handleLogout = () => {
        logout();
        MySwal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'You have been logged out!',
        });
    };

    const handleAddNewPassword = () => {
        console.log(user.uid, url, password, email, name);
        // Add new password to firestore without deleting the old ones
        if(value._document == null){
            handleFirstNewPassword();
        }   
        else{
            let passwords= [
                ...value.data().passwords,
                {
                    url: url,
                    password: password,
                    email: email,
                    name: name
                }
            ]
            setDoc(doc(db, "passwords", user.uid), {
                passwords
            }, { merge: true });
            MySwal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your password has been added!',
            });
        }
    };

    const handleFirstNewPassword = () => {
        console.log(user.uid, url, password, email, name);
        // Add new password to firestore without deleting the old ones
        let passwords= [
            {
                url: url,
                password: password,
                email: email,
                name: name
            }
        ]
        setDoc(doc(db, "passwords", user.uid), {
            passwords
        }, { merge: true });
        MySwal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your password has been added!',
        });
    };

    const handleSelectedPassword = (key) => {
        setSelectedPassword(value.data().passwords[key]);
    }

    const handleToogleAddNewPassword = () => {
        setToogleAddNewPassword(!toogleAddNewPassword);
    }
    return (
        <>  
            {loading ? (
                <Loading />
            ) : (
                <>

                        {
                            error && value.data() ?
                                (
                                    <div className="flex col">
                                        <h1 className="text-2xl text-center">Error: {error}</h1>
                                        <h1 className="text-2xl text-center">Value: {value}</h1>
                                    </div>
                                )
                            :
                                (
                                    <>
                                        <DashboardBar logout={handleLogout} user={user} page="Dashboard"/>
                                        <div className="flex col">
                                        <DashboardPasswordList passwords={value} handleSelectedPassword={handleSelectedPassword} handleToogleAddNewPassword={handleToogleAddNewPassword} />
                                        <DashboardPassword selectedPassword={selectedPassword} />
                                        {toogleAddNewPassword ? <DashboardAddNewPasswordModal handleToogleAddNewPassword={handleToogleAddNewPassword} handleAddNewPassword={handleAddNewPassword} setName={setName} name={name} setEmail={setEmail} email={email} setPassword={setPassword} password={password} setUrl={setUrl} url={url} /> : null}
                                        </div>
                                        <DashboardFooter /> 
                                    </>
                                )
                            
                        }
                </>
            )}
        </>
    );
}

export default Landing;