import React from "react";

const DogDetails = ({dog}) =>{
    return (

        <>
        <div>
            <h1>Name: {dog.name}</h1>
            <h2>Age: {dog.age}</h2>
            <ul>
                {dog.facts.map(fact =>
                    <li>
                        {fact}
                    </li>
                )}
            </ul>
        </div>
        </>
    )
}

export default DogDetails