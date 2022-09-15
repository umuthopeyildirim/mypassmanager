import { useEffect, useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthRegisterForm from "../components/dashboard/auth/AuthRegisterForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../utils/Auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    const handleRegister = async (e) => {
        e.preventDefault();
        if (name === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your name!',
            })
        }
        if (email === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email!',
            })
        }
        if (password === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your password!',
            })
        }
        if (name !== "" && email !== "" && password !== "") {
            await registerWithEmailAndPassword(name, email, password)
            .then(() => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'You have successfully registered!',
                })
                navigate("/dashboard")
            })
            .catch((error) => {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            })
        }
    };

    const handleRegisterWithGoogle = async (e) => {
        e.preventDefault();
        await signInWithGoogle()
        .then((res) => {
            if (res) {
                navigate("/dashboard");
            }
            else {
                MySwal.fire({
                    title: <p>Something went wrong</p>,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
    };

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    return (
        <>
            <AuthBar />
            <AuthRegisterForm name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} register={handleRegister} signinGoogle={handleRegisterWithGoogle} />
        </>
    );
}

export default Register;