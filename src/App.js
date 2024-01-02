import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>̦</Route>
        <Route path='/about' element={<About/>}>̦</Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
