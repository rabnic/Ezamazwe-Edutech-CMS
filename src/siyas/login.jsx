import React, { useState } from 'react'
import { AdminLogin, auth} from '../services/firebase';
import {  useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {


    


    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState('');
    const [message, setMessage] = useState(false);

    const navigate = useNavigate()


    const handleInputChange = (e) => {
        setPassword(e.target.value);

        if (!e.target.value) {
            setMessage(true);
        } else {
            setMessage(false);
        }
    };



    const login = async (e) => {

        AdminLogin(auth, email, password, { message: message })


        e.preventDefault();




        if (password === '') {
            setMessage('The text input field is empty.');
        } else {
            setMessage('');
        }


        const response = await AdminLogin(auth, email, password, { message: message })


        console.log(response);

        if (response.message === 'Authorized') {

            signInWithEmailAndPassword(auth, email, password).then((data) => {

                console.log(data);

                if (password !== password) {
                    setMessage('The Password is Incorrect.');
                } else {
                    setMessage('');
                    alert("Successfully Logged in")


                    navigate("/Reset", { email: email, password: response.password })

                }



            }).catch((error) => {

                console.log(error);

                alert("Cannot Login")

            })

        } else if (response.message === "Not authorized") {

            alert("Not Authorized")



        } else {

            alert('Invalid credentials')

        }

        console.log(email, password, message);


    };


    return (

        <>
            <div>

                <p>Admin Login</p>
                <form >
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={handleInputChange}
                    />
                    <button type="submit" onClick={login}>Login</button>
                </form>
            </div>
            <p style={{ color: 'red' }}>{message}</p>
        </>
    )
}
