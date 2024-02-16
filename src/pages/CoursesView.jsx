import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

function Courses() {

    const [categoryData, setCategoryData] = useState([]);

    const fetchCategoryData = async () => {

        try {
            const querySnapshot = await getDocs(collection(db, "Content"));
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("CollectionTest", data)
            setCategoryData(data); 
        } catch (error) {
            console.error('Error fetching Firestore data:', error);
        }
    };

    useEffect(() => {
        fetchCategoryData();
    }, [])

    return (
        <div>
            {categoryData.map((course) => (
                <div key={course.id}>
                    <Link to={{pathname: `/grades/${course.id}`}}>{course.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Courses