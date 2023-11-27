import React, { useEffect, useState } from 'react'

export default function LearningOutcomes() {

    const [learningOutcomes, setLearningOutcomes] = useState('')
    const [savedLearningOutcomes, setSavedLearningOutcomes] = useState([])
    const [id, setID] = useState('')


    // const learningOutComesSaved = (data, learningOutcomes) => {

    //     const newlearningOutcome = {
    //         id: savedLearningOutcomes.length,
    //         learningOutcome: learningOutcomes,
    //       };


    //         console.log(newlearningOutcome);
    //         setSavedLearningOutcomes([...savedLearningOutcomes, newlearningOutcome])

    // }

    const learningOutComesSaved = (learningOutcomes) => {
        const newlearningOutcome = {
            id: savedLearningOutcomes.length,
            learningOutcome: learningOutcomes,
        };

        console.log(newlearningOutcome);
        setSavedLearningOutcomes([...savedLearningOutcomes, newlearningOutcome]);
    };


    const learningOutcomesDelete = (index) => {

        console.log(index);


        if (index >= 0 && index < savedLearningOutcomes.length) {
            let updatedOutcomes = [...savedLearningOutcomes];
            updatedOutcomes.splice(index, 1);
            console.log('Outcome deleted successfully!');
            setSavedLearningOutcomes(updatedOutcomes);
        } else {
            console.log('Invalid index!');
        }
    };



    const edit = (index, learningOutcome) => {
        console.log(index, learningOutcome);


        setLearningOutcomes(learningOutcome)
        setID(index)

        // setShow(true)

        // const shopItem = doc(database, "List", id);
        // await updateDoc(shopItem, { Item: updatedItem });


    };





    const learningOutcomesUpdate = (newlearningOutcome) => {
        console.log(id, newlearningOutcome);
        let updatedOutcomes = [...savedLearningOutcomes];
        if (id >= 0 && id < savedLearningOutcomes.length) {


            updatedOutcomes[id] = newlearningOutcome;
            console.log('Outcome edited successfully!');

            setSavedLearningOutcomes(updatedOutcomes);

        } else {
            console.log('Invalid index!');
        }
    };




    return (
        <>

            <br />

            <label> learningOutcomes :</label>
            <input
                type='text'
                value={learningOutcomes}
                onChange={e => setLearningOutcomes(e.target.value)}
            />

            <button type="submit" onClick={(e) => { learningOutComesSaved(learningOutcomes) }}>Add</button>
            <button type="submit" onClick={(e) => { learningOutcomesUpdate(learningOutcomes) }}>Update</button>


            {
                savedLearningOutcomes.map((value) => {
                    return <li key={value.id}>{value.learningOutcome}
                        <button type="submit" onClick={(e) => { edit(value.id, value.learningOutcome) }}> Edit</button>
                        <button type="submit" onClick={(e) => { learningOutcomesDelete(value.id) }}> Delete</button></li>


                })
            }
        </>
    )
}
