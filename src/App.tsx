import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './componenets/Home';
import About from './componenets/About';
import Universty from './componenets/Universty';
import Academy from './componenets/Academy';
import Message from './componenets/Message';
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="/home" element={<About />} />
          <Route path="/universty" element={<Universty />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/Message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
