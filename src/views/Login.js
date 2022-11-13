import { useEffect, useState } from "react";
import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthLoginForm from "../components/dashboard/auth/AuthLoginForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../utils/Auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    
    const handleLogin = async (e) => {
        e.preventDefault();
        await logInWithEmailAndPassword(email, password)
        .then((res) => {
            if (res) {
                navigate("/dashboard");
            }
        })
        .catch((error) => {
            MySwal.fire({
                title: <p>Invalid email or password</p>,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        })
    };

    const handleLoginWithGoogle = async (e) => {
        e.preventDefault();
        await signInWithGoogle()
        .then((res) => {
            if (res) {
                navigate("/dashboard");
            }
        })
        .catch((error) => {
            MySwal.fire({
                title: <p>Something went wrong with Google Auth</p>,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
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
            <AuthLoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} signin={handleLogin} signinGoogle={handleLoginWithGoogle} />
        </>
    );
}

export default Login;