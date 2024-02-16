import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordFunction } from '../services/firebase';

export default function forgotPassword() {

    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const forgotPassword = async () => {
        try {
            await ForgotPasswordFunction(email);
            alert("Password updated successfully.")
            navigate('/Login'); 
        } catch (error) {
            console.log("Unable to update password:", error);
        }
    };
    return (
        <>

            <div>forgotPassword

                <form >
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button type="submit" onClick={forgotPassword}>Login</button>
                </form>

            </div>
        </>
    )
}
