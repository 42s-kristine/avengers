import React from 'react';
import NavBar from './components/NavBar';
import Cluster from './pages/Cluster';
import Claim from './pages/Claim';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Cluster />} path="/cluster" />
        <Route element={<Claim />} path="/claim" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
