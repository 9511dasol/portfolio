import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './componenets/Home';
import About from './componenets/About';
import Project from './componenets/Project';
import Message from './componenets/Message';
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="/home" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Message" element={<Message />} />
        </Route>
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
  );
};

export default App;
