import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { AdminLogin, auth, database, logout } from '../services/firebase';
import { Router, Routes, Route, useNavigate } from 'react-router-dom'
import { signInWithCredential, signInWithEmailAndPassword, getIdToken, onAuthStateChanged, getIdTokenResult } from 'firebase/auth';

export default function Login() {





    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState('');
    const [message, setMessage] = useState(false);

    const navigate = useNavigate()

    // function Login()  }onSubmit={AdminLogin}

    const handleInputChange = (e) => {
        setPassword(e.target.value);
        // setEmail(e.target.value)

        if (!e.target.value) {
            setMessage(true);
        } else {
            setMessage(false);
        }
    };

    // const getAdminDoc = async () => {

    //     //get data from database 
    //     try {
    //         const data = await getDoc(adminCollection);

    //         const filtereddata = data.docs.map((doc) => ({

    //             //this fucntion  returns the values in the collection
    //             ...doc.data(),
    //             id: doc.id,

    //         }));

    //         setAdminList(filtereddata);
    //         // setShoppingList(data);

    //         console.log(filtereddata);
    //     } catch (error) {
    //         console.error("Error fetching collection", error);
    //     }
    // };


    const login = async (e) => {

        // AdminLogin(auth, email, password, { message: message })


        e.preventDefault();

        // alert("User has been registered successfully")



        if (password === '') {
            setMessage('The text input field is empty.');
        } else {
            setMessage('');
            // Continue with form submission or any other actions you need
        }


        const response = await AdminLogin(auth, email, password, { message: message })
        // signInWithEmailAndPassword(auth, email, password).then((data) => {

        //     console.log(data);
        // })

        // console.log(response);

        if (response.message === 'Authorized') {
            e.preventDefault();
            // gotohomePage()

            signInWithEmailAndPassword(auth, email, password).then(async(data) => {

                console.log({data});


                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const idTokenResult = await getIdTokenResult(user, true);
                        const customClaims = idTokenResult.claims;
                        console.log("data 93",{ customClaims });
                    }
                  })
     


                if (password !== password) {
                    setMessage('The Password is Incorrect.');
                } else {
                    setMessage('');
                    alert("Successfully Logged in")
                    // setUP()

                    //if statement to see if the user has reset ther password

                    // navigate("/Reset", { email: email, password: password })

                    if (customClaims.forcePasswordReset === true) { // response.forcePasswordChange

                        navigate("/ResetPassword", { email: data.email, password: data.password })

                    } else {

                        navigate("/CreateAdmin")
                    }


                    // navigate('/CreateAdmin')
                    // Continue with form submission or any other actions you need
                }



            }).catch((error) => {

                console.log(error);

                alert("Cannot Login")
                // document.getElementById('message').style.display = "block"
                // document.getElementById('message').style.color = "red"
                // document.getElementById('message').hidden = false

            })

        } else if (response.message === "Not authorized") {

            alert("Not Authorized")



        } else {

            // alert('Invalid credentials')

        }

        // console.log(email, password, message);


    };


    // const gotohomePage = async ((e) => {
    //     e.preventDefault();

    //    await signInWithEmailAndPassword(auth, email, password).then(() => {



    //         alert("Successfully Logged in")
    //         // setUP()
    //         navigate('/CreateAdmin')

    //     }).catch((error) => {

    //         alert("Cannot Login")
    //         // document.getElementById('message').style.display = "block"
    //         // document.getElementById('message').style.color = "red"
    //         // document.getElementById('message').hidden = false

    //     })

    // })

    // const loginUser = (e) => {


    //     e.preventDefault();
    //     login().then(() => {
    //         gotohomePage
    //     })

    // }


    //  const logout = () => {

    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //       alert("User has logged out Successfully")
    //       navigate('/login')
    //     })
    //   }
    // const AdminLogin = async (e, email, password, ) => {

    //     e.preventDefault()

    //     try {
    //       fetch('https://ezamazwe-edutech-nodejs.onrender.com/admin-login', {

    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email: email, password: password}),

    //       }).then( response => response.json()).then( data => {
    //         // console.log(response);

    //         // Handle the response data
    //         if (data.message === 'Authorised') {

    //           console.log('Admin:', data.message);

    //           // Further actions for an authorized user

    //           // signInWithEmailAndPassword(auth, email, password).then(() => {

    //           //   alert("Successfully Logged in")
    //           //   setUP()
    //           //   navigate('/CreateUser', { email: data.email, password: data.password })
    //           //   // navigate('/CreateUser')

    //           // }).catch((error) => {

    //           //   document.getElementById('message').style.display = "block"
    //           //   document.getElementById('message').style.color = "red"
    //           //   document.getElementById('message').hidden = false

    //           // })

    //         } else {

    //           console.log('Not Admin:', data.message);
    //           // Further actions for an unauthorized user


    //           // alert('Sorry we cant log you into the administration portal')

    //           //   signInWithEmailAndPassword(auth, email, password).then(() => {

    //           //     alert("Successfully Logged in")
    //           //     setUP()
    //           //     navigate('/')

    //           // }).catch((error) => {

    //           //     document.getElementById('message').style.display = "block"
    //           //     document.getElementById('message').style.color = "red"
    //           //     document.getElementById('message').hidden = false

    //           // })

    //         }
    //       })
    //         .catch(error => {
    //           console.error('Error during authentication:', error);
    //           // Handle errors, such as network issues or server errors
    //         });
    //     } catch (error) {
    //       console.log("Error login in: ", error)
    //     }


    //   }

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
