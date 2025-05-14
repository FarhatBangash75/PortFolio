import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import Contacts from './Components/Contacts';
import Skills from './Components/Skills';
import Headers from './Components/Headers';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path ="/Project" element={<Project/>} />
        <Route path ="/Contacts" element={<Contacts/>} />
      </Routes>
    </>
  );
}

export default App;
