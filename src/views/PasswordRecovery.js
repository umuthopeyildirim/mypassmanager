import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../utils/Auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import AuthBar from "../components/dashboard/auth/AuthBar";
import AuthPasswordRecoveryForm from "../components/dashboard/auth/AuthPasswordRecoveryForm";

function PasswordRecovery(){
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    useEffect(() => {
      if (loading) return;
      if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    const handlePasswordRecovery = async (e) => {
        e.preventDefault();
        // Make sure the email is not empty
        if (email === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            })
            return;
        }
        // Make sure the email is not empty
        if (email !== "") {
            await sendPasswordReset(email)
            .then(() => {
                navigate("/login");
                MySwal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Password reset email sent!',
                })
            })
            .catch((error) => {
                alert(error.message);
            })
        }
    };
    return (
        <>
            <AuthBar />
            <AuthPasswordRecoveryForm email={email} setEmail={setEmail} handleRecovery={handlePasswordRecovery}/>
        </>
    );
}

export default PasswordRecovery;
