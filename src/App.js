import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}>̦</Route>
        <Route path='/about' element={<About/>}>̦</Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
