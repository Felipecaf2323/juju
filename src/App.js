import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState, useMemo } from 'react'

import Splash from './pages/Splash'
import Home from './pages/Home'
import Detail from './pages/Detail' 
import HomeTimerNot from "./pages/Cadastro"
import Cadastro from './pages/Cadastro';
import ParaQueServem from './pages/ParaQueServem'
import DetailPato from './pages/DetailPato';
import DetailMC from './pages/DetailMC';

function App() {

  return (

    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/ParaQueServem' element={<ParaQueServem/>}/>
      <Route path='/DetailPato' element={<DetailPato/>}/>
      <Route path='/DetailMC' element={<DetailMC/>}/>
    </Routes>

  );
}

export default App;