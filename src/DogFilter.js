import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
const DogFilter = ({dogs}) =>{
    const dogName = useParams();
    let dog = dogs.find((dog) => dog.name.toLowerCase() === dogName.name)
    return <DogDetails dog={dog} />


}
export default DogFilter