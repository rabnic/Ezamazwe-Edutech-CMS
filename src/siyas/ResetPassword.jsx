import React, { useState } from 'react';
import { ResetPasswordFunction, auth } from '../services/firebase';
import {  useNavigate } from 'react-router-dom'

export default function ResetPassword({ email, password }) {



    const user = auth.currentUser
    console.log("Current user Logged in", user);

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()


   

    const resetPassword = async (e) => {

        e.preventDefault();

        if (confirmPassword != newPassword) {
            alert('Passwords entered do not match. Re-enter passwords.');
            return;
        }
        try {
            await ResetPasswordFunction(user, oldPassword, newPassword);
            navigate('/CreateAdmin');
        } catch (error) {
            console.log("Error occured at reset password function:", error);
        }
    };

    return (
        <>
            <div>ResetPassword</div>


            <div>
                <p>Create new user:</p>

                <form >

                    <label>Old Password:</label>

                    <input
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />

                    <label>New password:</label>
                    <input
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <label>Confirm New Password:</label>
                    <input
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />


                    <button type="submit" onClick={resetPassword} >Create User</button>
                </form>
            </div>
        </>
    )
}
