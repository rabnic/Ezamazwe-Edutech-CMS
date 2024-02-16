
import { initializeApp } from "firebase/app";

import {  EmailAuthProvider, signOut, reauthenticateWithCredential, updatePassword, onAuthStateChanged, getIdTokenResult, signOut as signOutFirebase } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, setDoc, query, where, deleteDoc, updateDoc, arrayUnion } from "firebase/firestore";

import { getAuth } from 'firebase/auth'

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




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default getFirestore(app)
export const database = getFirestore(app)
export const storage = getStorage(app)


const value = collection(database, "admin")


export const signOutFromFirebase = () => {
  if (auth) {
    signOutFirebase(auth).then(() => {
      console.log("Sign out successful")
    })
  }
}

export const createNewAdmin = async (email, fullName, phoneNumber) => {
  let uid = null;
  try {
    const response = await fetch('https://ezamazwe-edutech-nodejs.onrender.com/create-user', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, fullName, phoneNumber }),
    });

    const responseData = await response.json();

    if (responseData.message) {
      const setDocResponse = await setDoc(doc(database, "admins", responseData.userRecord.uid), {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber
      });

    }
    uid = responseData
  } catch (error) {
    console.log("Unable to create user: ", error);
  } finally {
    return uid;
  }
}

export const updateAdminDetails = async (uid, fullName, email, phoneNumber) => {
  console.log("Updating", uid, fullName, email, phoneNumber);
  let response = null;
  try {
    console.log("before fetch")
    const fetchResponse = await fetch('https://ezamazwe-edutech-nodejs.onrender.com/admin-update', {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid, email, fullName, phoneNumber }),
    });

    const responseData = await fetchResponse.json();
    console.log("before assignment  responseData", responseData)
    response = responseData;
    if (responseData.message) {

      const docRef = doc(database, "admins", uid);
      await updateDoc(docRef, {
        fullName,
        email,
        phoneNumber
      });
    }

    console.log("responseData", responseData)

  } catch (error) {
    console.log("Error updating admin document", error)
  } finally {
    console.log("Finally responseData", response)
    return response;
  }
}


export const AdminLogin = async (emailA, password) => {

  const url = 'https://ezamazwe-edutech-nodejs.onrender.com/admin-login';


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



    if (result.message === 'Authorized') {





    } else if (result.message === 'Not authorized') {


    }
    else {
      console.log('Invalid:', result.message);


    }

    return result

  } catch (error) {
    console.log("Error login in: ", error)
  }
}

export const deleteAdminAccount = async (id) => {
  const url = 'https://ezamazwe-edutech-nodejs.onrender.com/delete-user';

  try {
    const admin = doc(database, "admins", id);
    await deleteDoc(admin);
    const response = await fetch(url, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid: id }),

    })
    const result = await response.json()
  } catch (error) {
    console.log("Couldn't delete admin account: ", error)
  }
}

export const getAdminDocument = async (id) => {
  let adminDoc = null
  try {
    const docRef = doc(database, "admins", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      adminDoc = docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting admin document", error)
  } finally {
    return adminDoc;
  }


}


export const logout = () => {

  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("User has logged out Successfully")
  })
}



export const ResetPasswordFunction = async (oldPassword, newPassword) => {
  const user = auth.currentUser;
  try {
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    const reAuthed = await reauthenticateWithCredential(user, credential);
    const updatedPass = await updatePassword(user, newPassword);
  } catch (error) {
    console.error('Error resetting password:', error.message);
    if (error.code === 'auth/wrong-password') {
      console.log('Incorrect current password. Please try again.');
    } else {
      console.log('Error resetting password. Please make sure you are logged in.');
    }
    throw error; 
  }
};

export const updatePasswordReset = async (email) => {

  try {
    const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/update-password-reset`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
    const response = await apiUrl.json();
    return response;
  } catch (error) {
    console.log("Error resetting password", error);
  }
}

export const ForgotPasswordFunction = async (email) => {
  const url = "https://ezamazwe-edutech-cms.firebaseapp.com/"
  try {
    const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, url: url }),
      });
    const response = await apiUrl.json();
    return response;
  } catch (error) {
    console.log("Error resetting password", error);
  }
}

export const checkAuthState = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await getIdTokenResult(user, true);
        const customClaims = idTokenResult.claims;

        const adminData = {
          fullname: "Admin",
          email: customClaims.email,
          passwordChanged: !customClaims.forcePasswordReset,
          phoneNumber: customClaims.phone_number,
          uid: customClaims.user_id,
          admin: customClaims.admin,
          permissions: customClaims.permissions
        }
        resolve(adminData);
      } else {
        resolve(null);
      }
    });
  });
}

export const getUserCustomClaims = async (user) => {
  const idTokenResult = await getIdTokenResult(user, true);
  const customClaims = idTokenResult.claims;
  const adminDoc = await getAdminDocument(customClaims.user_id)

  const adminData = {
    fullName: adminDoc.fullName ? adminDoc.fullName : "",
    email: customClaims.email,
    passwordChanged: !customClaims.forcePasswordReset,
    phoneNumber: customClaims.phone_number,
    uid: customClaims.user_id,
    admin: customClaims.admin,
    permissions: customClaims.permissions
  }
  return adminData;
}
const createAdminToFirestore = async (admin) => {
  const docRef = await setDoc(doc(database, "admins", admin.uid), admin)
};

export const saveCourseToFirestore = async (courseData) => {
  let documentId;
  try {
    const docRef = await addDoc(collection(database, "courses"), courseData)
    documentId = docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
  return documentId;
};

export const saveLessonToFirestore = async (courseId, lessonData) => {
  let documentId;
  try {
    const courseDocRef = doc(database, "courses", courseId);
    const collectionRef = collection(courseDocRef, "lessons");
    const docRef = await addDoc(collectionRef, lessonData);
    documentId = docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
  return documentId;
};


export const saveTopicToFirestore = async (courseId, lessonId, topicData) => {
  let documentId;
  try {
    const lessondDocRef = doc(database, `courses/${courseId}/lessons/${lessonId}`);
    const lessonsCollectionRef = collection(lessondDocRef, "topics");




    const docRef = await addDoc(lessonsCollectionRef, topicData);
    documentId = docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
  return documentId;
};

export const getCategoryData = async () => {

  try {
    const data = await getDocs(collection(database, "Content"));



    const categoryData = {};
    data.docs.forEach((doc) => (

      categoryData[doc.id] = {
        ...doc.data(),
        id: doc.id
      }));


    return categoryData

  } catch (error) {

    console.error("Error fetching collection", error);
  }
}

export const getUsers = async () => {

  try {
    const data = await getDocs(collection(database, "users"));

    const usersData = data.docs.map((doc) => ({

      ...doc.data(),
      id: doc.id
    }));

    return usersData

  } catch (error) {

    console.error("Error fetching collection", error);
  }
}

export const addNewGradesToDB = async (categoryID, newGrades) => {
  try {
    const docRef = doc(database, 'Content', categoryID);

    await updateDoc(docRef, {
      grades: arrayUnion(...newGrades)
    });
  } catch (error) {
    console.log("Error saving grades", error)
  }
}

export const addNewSubjectsToDB = async (categoryID, gradeKey, newSubjects) => {
  try {

    const docRef = doc(database, 'Content', categoryID);

    await updateDoc(docRef, {
      [`subjects.${gradeKey}`]: arrayUnion(...newSubjects)
    });

  } catch (error) {
    console.log("Error saving grades", error)
  }
}






















///////////////////////////////////////////////////////////////

// Call the uploadAllVideos function with the videos array


export const uploadCourseVideos = async (courseId, videos) => {
  // const storage = getStorage();
  const updatedVideos = [...videos];

  // Upload 1 image at a time
  for (let [index, video] of videos.entries()) {
    // console.log(index)
    const imageRef = ref(storage, `/videos/${courseId}/${video.videoName}`);
    await uploadBytes(imageRef, video.video)
      .then(async (snapshot) => {
        // console.log(image.name, "upload success");
        await getDownloadURL(snapshot.ref).then((url) => {
          //   console.log(url);
          updatedVideos[index].video = url;
        });
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }
  return updatedVideos;
};

export const uploadLessonSupportingDocs = async (courseId, documents) => {
  // console.log("documents", documents);
  // const storage = getStorage();

  const updatedDocuments = [...documents];

  // Upload 1 image at a time
  for (let [index, document] of documents.entries()) {
    // console.log(index)
    const documentRef = ref(storage, `/supporting_documents/${courseId}/${document.documentName}`);
    await uploadBytes(documentRef, document.document)
      .then(async (snapshot) => {
        // console.log(image.name, "upload success");
        await getDownloadURL(snapshot.ref).then((url) => {
          //   console.log(url);
          updatedDocuments[index].document = url;
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return updatedDocuments;
};

export const fetchFilteredCourseDocuments = async (courseCategory, grade, subject) => {
  let filteredDocs = []
  console.log(courseCategory, grade, subject)
  try {
    // console.log("qqqqqqqqqqqqqqqqqqqqqqqq")
    const coursesRef = collection(database, "courses");
    const q = query(coursesRef,
      where("courseCategory", "==", courseCategory),
      where("grade", "==", grade),
      where("subject", "==", subject),
    );
    // console.log("coursesRef", coursesRef)


    // Extract the filtered documents
    // const documents = querySnapshot.docs.map((doc) => doc.data());
    const querySnapshot = await getDocs(q);
    // for(let doc of querySnapshot.docs) {

    // }
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      filteredDocs.push({ id: doc.id, ...doc.data() });
    });

    // console.log("firebase docsssssssssss", querySnapshot)
  } catch (error) {
    console.error("Error fetching documents: ", error);
  } finally {
    console.log("finally")
    return filteredDocs;
  }
};



/////////////////////////////////////////////////////////////////

// Call the function to update videos with Firebase URLs
// updateVideosWithFirebaseURLs(videos)
//   .then(() => {
//     console.log("Videos updated with Firebase download URLs:", videos);
//   })
//   .catch((error) => {
//     console.error("Error updating videos:", error);
//   });



// //deletes admin
// const deleteAdmin = async (id) => {

//   const admin = doc(database, "admins", id);
//   await deleteDoc(admin);
//   alert("This item was deleted")

// }

// //edit admin
// const editAdmin = async (id, email, firstName, lastName, phoneNumber, role) => {
//   setEmail(email)
//   setFirstName(firstName)
//   setLastName(lastName)
//   setPhoneNumber(phoneNumber)
//   setRole(role)
//   setPasswordChanged(passwordChanged)
//   setID(id)

//   // setShow(true)

//   const shopItem = doc(database, "List", id);
//   // await updateDoc(shopItem, { Item: updatedItem });


// };


// //udates admin with new information
// const updateAdmin = async () => {
//   // setItem(item)
//   // setQuantity(quantity)
//   // setID(id)

//   const shopItem = doc(database, "List", id);
//   // await updateDoc(shopItem, { Item: updatedItem });
//   await updateDoc(shopItem, { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, role: role, });
//   alert("Item was updated")
//   // setShow(false)


// };


// //gets information from firestore
// const getAdminList = async () => {

//   //get data from database
//   try {
//       const data = await getDocs(adminCollection);

//       const filtereddata = data.docs.map((doc) => ({

//           //this fucntion  returns the values in the collection
//           ...doc.data(),
//           id: doc.id,

//       }));

//       setAdminList(filtereddata);
//       // setShoppingList(data);

//       console.log(filtereddata);
//   } catch (error) {
//       console.error("Error fetching collection", error);
//   }
// };