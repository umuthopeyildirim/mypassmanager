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
import DashboardHero from "../components/dashboard/dashboard/DashboardHero";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import Loading from "../components/loading/Loading";

function Landing(){
    const [user, loading] = useAuthState(auth);
    const [url, setUrl] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const db = getFirestore(app);
    const [value, vLoading, error] = useDocument(
        user ? doc(getFirestore(app), 'passwords', user.uid) : null
    );


    useLayoutEffect(() => {
        if (loading) return;
        if (vLoading) return;
        if (!user) return navigate("/login")
        if (error) {
            console.log(error);
            logout();
            navigate("/login")
        }

    }, [user, value, vLoading, loading, error, navigate]);


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

    return (
        <>
            {user || value ? 
                <>
                    <DashboardBar logout={handleLogout} user={user} page="Dashboard"/>
                    <DashboardHero passwords={value} handleAddNewPassword={handleAddNewPassword} setName={setName} name={name} setEmail={setEmail} email={email} setPassword={setPassword} password={password} setUrl={setUrl} url={url} />
                    <DashboardFooter /> 
                </>
            : 
                <Loading />
            }
        </>
    );
}

export default Landing;