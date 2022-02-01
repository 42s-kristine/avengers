import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Cluster from './pages/Cluster';
import Claim from './pages/Claim';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="content">
        <NavBar />
        <SideBar />
        <Routes>
          <Route element={<Cluster />} path="/cluster" />
          <Route element={<Claim />} path="/claim" />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
