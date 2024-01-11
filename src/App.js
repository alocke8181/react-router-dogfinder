import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import defaultDogs from './defaultDogs';
import DogList from './DogList';
import DogFilter from './DogFilter';
import './App.css';

const App = ({dogs = defaultDogs}) =>{


  return (
    <div className="App">
      <Routes>
        <Route exact path='/dogs' element= {<DogList dogNames={dogs.map((dog) => dog.name)} />} />
        <Route path='/dogs/:name' element={<DogFilter dogs={dogs}/>} />
        <Route path='*' element={<Navigate to={'/dogs'} />} />
      </Routes>
    </div>
  );
}

export default App;
