import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

function Grades() {

  const { id } = useParams()
  const [gradesData, setGradesData] = useState({});

  useEffect(() => {
    const fetchGrades = async () => {

      try {
        const gradesRef = doc(db, 'Content', id);
        const gradesSnapshot = await getDoc(gradesRef);

        if (gradesSnapshot.exists()) {
          const data = gradesSnapshot.data();

          setGradesData(data); // Update state with fetched grades data
        } else {
          console.log('No grades data found');
        }
      } catch (error) {
        console.error('Error fetching grades from Firestore:', error);
      }

    }

    fetchGrades()
  }, [id])

  return (
    <div>
      <h1>{gradesData.name} Grades</h1>
      <ul style={{display:'flex', flexDirection:'column'}}>
        {gradesData.grades && gradesData.grades.map((grade, key) => (
          <Link key={key} to={{pathname: `/subjects/${id}/${grade}`}}>{grade}</Link>
        ))}
      </ul>
    </div>
  )
}

export default Grades
