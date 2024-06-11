import React from 'react'

const Children = ({ students, counter,age }) => {
    console.log(students) // [a,b,c,d]
    console.log(age,"age");
    return (
        <div>
            <h1>Children - {counter}</h1>
            <div>
                {students.map((std, i) => (
                    <div>
                        <h1>{i + 1}. {std}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Children