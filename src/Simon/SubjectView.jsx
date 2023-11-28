import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

function SubjectView() {

    const { id, subject } = useParams()
    const [selectedSubject, setSelectedSubject] = useState([])

    const fetchSubject = async () => {
        try {
            const courseRef = collection(db, "Courses");

            // Create a query against the collection.
            const subjectQuery = query(courseRef, where("courseCategory.categoryTopic", "==", subject));

            const querySnapshot = await getDocs(subjectQuery);

            const subjects = [];
            querySnapshot.forEach((doc) => {
                subjects.push({ id: doc.id, ...doc.data() });
            });
            console.log("Data. ", subjects)
            setSelectedSubject(subjects)

        } catch (error) {
            console.log("Couldn't fetch data. ", error)
        }
    }

    useEffect(() => {
        fetchSubject()
    }, [id, subject])

    return (
        <div>
        {selectedSubject.map((course) => (
            <div key={course.id}>
                <h2>{course.courseName}</h2>
                <p>{course.shortdescription}</p>
                {/* Render other course details here */}
            </div>
        ))}
    </div>
    )
}

export default SubjectView