import React, { useEffect, useState } from 'react'
import { CreateNewUser, database, auth } from '../services/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { Router, Routes, Route, useNavigate } from 'react-router-dom'


export default function CreateUser() {

    const navigate = useNavigate()


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [passwordChanged, setPasswordChanged] = useState("no");
    const [isAlertVisible, setIsAlertVisible] = useState(false);


    const [adminList, setAdminList] = useState([]);

    const [id, setID] = useState('')


    const adminCollection = collection(database, "admins")

    const uri = 'https://tinypic.host/image/white-wine.nSX79'



    const handleInputChange = (e) => {
        setFirstName(e.target.value);

        if (!e.target.value) {
            setIsAlertVisible(true);
        } else {
            setIsAlertVisible(false);
        }
    };




    useEffect(() => {
        getAdminList()
    }, [])


    const newUsers = async (e,) => {

        e.preventDefault();

        alert("User has been registered successfully")

        CreateNewUser(email, firstName, lastName, phoneNumber, role, image)
        const newAdmin = { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, role: role, image: uri, passwordChanged: passwordChanged }
        const docRef = await setDoc(doc(database, "admins", email), newAdmin)
        console.log("Doc Reff ===== ",docRef);

    };


    const deleteAdmin = async (id) => {

        const admin = doc(database, "admins", id);
        await deleteDoc(admin);
        alert("This item was deleted")

    }

    const editAdmin = async (id, email, firstName, lastName, phoneNumber, role) => {
        setEmail(email)
        setFirstName(firstName)
        setLastName(lastName)
        setPhoneNumber(phoneNumber)
        setRole(role)
        setPasswordChanged(passwordChanged)
        setID(id)


        const shopItem = doc(database, "List", id);


    };


    const updateAdmin = async () => {

        const shopItem = doc(database, "List", id);
        await updateDoc(shopItem, { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, role: role, });
        alert("Item was updated")


    };


    const getAdminList = async () => {

        try {
            const data = await getDocs(adminCollection);

            const filtereddata = data.docs.map((doc) => ({

                ...doc.data(),
                id: doc.id,

            }));

            setAdminList(filtereddata);

            console.log(filtereddata);
        } catch (error) {
            console.error("Error fetching collection", error);
        }
    };


    const logout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            alert("User has logged out Successfully")
            navigate('/Login')
        })
    }





    return (
        <>
            <div>

                <button onClick={logout} >Logout</button>


                <p>Create new user:</p>

                <form onSubmit={newUsers} >

                    <label>First name:</label>

                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />

                    <label>Last name:</label>
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />

                    <label>phone:</label>
                    <input
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />

                    <label>Email address:</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                    />

                    <label>Select role:</label>

                    <select
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="admin"> Super admin</option>
                        <option value="Admin">Normal Admin</option>
                    </select>
                    <button type="submit" >Create User</button>
                    <button onClick={updateAdmin}>Update</button>
                </form>
            </div>
            {message && <p>{message}</p>}




            <h1>Details Assigned</h1>

            <br></br>

            <table className="table">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Images</th>

                    </tr>

                    {adminList.map((data) => {

                        return (
                            <tr>

                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.phoneNumber}</td>
                                <td>{data.email}</td>
                                <td>{data.role}</td>
                                <td>{data.image}</td>


                                <td>
                                    <button className="btnsign" onClick={() => deleteAdmin(data.id)} >Delete</button>
                                    <button className="btnsign" onClick={() => editAdmin(data.id, data.firstName, data.lastName, data.phoneNumber, data.email, data.images, data.roles)} >Update</button></td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>




        </>
    )
}
