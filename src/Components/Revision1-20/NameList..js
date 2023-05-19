import React from 'react';

const NameList = () => {
    // const names = ["mohamed", "ramadan", "meray", "ahmed"];
    // const nameList=names.map((name) => <h1>{name}</h1>)
    const persons = [
        {
            id: 1,
            name: "mohamed",
            age: 10,
            skills: 'React'
        },
        {
            id: 2,
            name: "Ramadan",
            age: 50,
            skills: 'Js'
        },
        {
            id: 3,
            name: "Meray",
            age: 100,
            skills: 'Anguler'
        },
        {
            id: 4,
            name: "Ahmed",
            age: 110,
            skills: 'CSS'
        },
    ]
    const peopleData = persons.map((person) => <div key={person.id} className='react-1.2'>{`Your Name is ${person.name} and your skills is ${person.skills}`}</div>)
    return (
        <div>
            {
                peopleData
            }

        </div>
    )
}

export default NameList;