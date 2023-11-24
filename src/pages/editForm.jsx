import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../services/firebase'

export default function EditForm() {
    const [lessonName, setLessonName] = useState("")
    const [lessonType, setLessonType] = useState("")
    const [lessonLinks, setLessonLinks] = useState([])
    const [lessonDocuments, setLessonDocuments] = useState("")
    const [lessonNumber, setLessonNumber] = useState("")


// const addingLessondata = async () =>{

//     await addDoc(collection(database, "courseContent", docId), {
//         lessonName: lessonName,
//         lessonType: lessonType,
//         lessonLinks: lessonLinks,
//         lessonDocuments: [{
//           lessonDocs: {
//             docName: docName,
//             docUrl: docUrl
//           }
//         }],
//         LessonNumber:lessonNumber,
//         lessonUrl: url
//       });
// }




    return (
        <div className='EditForm'>
            <input placeholder='Lesson Name...' onChange={(e) => setLessonName(e.target.value)} />
            <input placeholder='Lesson...' onChange={(e) => setLessonType(e.target.value)} />
            <input placeholder='Enter links...' onChange={(e) => setLessonLinks(e.target.value)} />
            <input type="file" accept=".pdf, .doc, .docx, .txt" onChange={(e) => setLessonDocuments(e.target.value)} />
            <input placeholder='Enter Section number...'  type="number" onChange={(e) => setLessonNumber(e.target.value)} />
            <button>Update</button>
        </div>
    )
}
