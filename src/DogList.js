import React from "react";
import { Link } from "react-router-dom";


const DogList = ({dogNames}) =>{

    return (
        <>
        <ul>
            {dogNames.map((name) => {return(
                <li key={name.toLowerCase()}>
                    <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
                </li>
            )})}
        </ul>
        </>
    )


}

export default DogList;