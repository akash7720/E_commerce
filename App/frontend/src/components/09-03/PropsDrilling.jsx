import React from 'react'
import Children from './Children'

const PropsDrilling = ({ students, counter,age }) => {
     console.log(students, "students")
     console.log(age,"age");
    return (
        <div>
            <Children students={students}  counter={counter} age={age}  />
        </div>
    )
}

export default PropsDrilling