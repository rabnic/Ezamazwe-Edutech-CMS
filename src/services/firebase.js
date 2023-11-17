// Firebase Services

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { initializeAuth, get, signInWithEmailAndPassword, EmailAuthProvider, signOut, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage"
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI6TYQ3ZYawor7WxjhTwKnDQKT8_Sj6gI",
  authDomain: "edutech-app-eecfd.firebaseapp.com",
  databaseURL: "https://edutech-app-eecfd-default-rtdb.firebaseio.com",
  projectId: "edutech-app-eecfd",
  storageBucket: "edutech-app-eecfd.appspot.com",
  messagingSenderId: "904449562777",
  appId: "1:904449562777:web:27e8ad9dd1a27d5054c008",
  measurementId: "G-7CCCTV9REH"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//auth for firebase
export const auth = getAuth(app)
//  { auth }

//firestore 
export default getFirestore(app)
export const database = getFirestore(app)
export const storage = getStorage(app)


const value = collection(database, "admin")

// const setUP = (role) => {

//   setUserRole(role)

//   if (role === "admin") {
//     adminLinks.forEach(item => item.style.display = "none")
//     guestLinks.forEach(item => item.style.display = "block")

//     console.log(role);
//   }
//   else {

//     adminLinks.forEach(item => item.style.display = "block")
//     guestLinks.forEach(item => item.style.display = "block")

//   }

//   //console.log(role);

// }


export const CreateNewUser = async (email, firstName, lastName, phoneNumber, role) => {
  // e.preventDefault();

  try {
    const response = await fetch('https://ezamazwe-edutech-nodejs.onrender.com/create-user', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, firstName, lastName, phoneNumber, role }),
    });

    const responseData = await response.json();
    // setMessage(responseData.message);

    console.log("Details: ", email, firstName, lastName, phoneNumber, role);
    console.log("Creating user: ", responseData);

  } catch (error) {
    console.log("Unable to create user: ", error);
    // setMessage('Unable to create user. Please try again later.');
  }
}

export const AdminLogin = async (auth, emailA, password, message) => {

  const url = 'https://ezamazwe-edutech-nodejs.onrender.com/admin-login';

  // const 

  const email = { email: emailA, password: password }


  try {
    const response = await fetch(url, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),

    })

    const result = await response.json()

    console.log("sssssss", result);

    // return

    //   // Handle the response data
    if (result.message === 'Authorized') {

      console.log('Admin:', result.message);


      // Further actions for an authorized user


    } else if (result.message === 'Not authorized') {
      console.log('Not Admin:', result.message);
      // Further actions for an unauthorized user

      // alert('Not Authorized')

    }
    else {
      console.log('Invalid:', result.message);
      // Further actions for an unauthorized user

      // alert('Invalid ')

    }
    return result


  } catch (error) {
    console.log("Error login in: ", error)
  }


}


// export async function AdminLogin(email, password) {
//   try {
//     const response = await fetch('https://ezamazwe-edutech-nodejs.onrender.com/admin-login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: email, password: password }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//     if (data.message === 'Authorised') {
//       console.log('Admin:', data.message);
//       // Further actions for an authorized user

//     } else {
//       console.log('Not Admin:', data.message);
//       // Further actions for an unauthorized user
//     }
//   } catch (error) {
//     console.error('Error during authentication:', error);
//     // Handle errors, such as network issues or server errors
//   }
// }

export const logout = () => {

  const auth = getAuth();
  signOut(auth).then(() => {
    alert("User has logged out Successfully")
    // navigate('/login')
  })
}


// try {
//   const response = await fetch('https://ezamazwe-edutech-nodejs.onrender.com/admin-login', {

//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email: email }),
//   })

//   const responseData = await response.json();
//   // setMessage(responseData.message);, password
//   console.log("Details: ", email);
//   console.log("user logging in ====: ", responseData);

//   // setMessage(response.data.message);, password
//   // console.log("Logged in:: ", (response.data.message))

// } catch (error) {


//   console.log("Unable to login:: ", error);
//   // setMessage(error)
// }

export const ResetPasswordFunction = async (user, oldPassword, newPassword) => {
  console.log("User currently logged in:", user);
  try {
    // Re-authenticate the user with their current password
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    await reauthenticateWithCredential(user, credential);
    // If re-authentication is successful, update the password
    await updatePassword(user, newPassword);
    console.log('Password reset successful:', user);
    alert('Password reset successful.');
  } catch (error) {
    console.error('Error resetting password:', error.message);
    // Handle specific error cases, such as incorrect current password
    if (error.code === 'auth/wrong-password') {
      alert('Incorrect current password. Please try again.');
    } else {
      alert('Error resetting password. Please make sure you are logged in.');
    }
    throw error; // Re-throw the error to propagate it if needed
  }
};


// Forgot password function
export const ForgotPasswordFunction = async (email) => {
  console.log("Forgot password", email);
  try {
    const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
    const response = await apiUrl.json();
    alert("Email for password reset has been sent")
    // Handle the response here
    console.log('Server Response:', response);
  } catch (error) {
    console.log("Error resetting password", error);
  }
}