import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DinoScreen } from '../components/DinoScreen';
import { ListDinosScreen } from '../components/ListDinosScreen';
import { NavBar } from '../components/NavBar';
import { QuienSoyScreen } from '../components/QuienSoyScreen';

export const DashboardRoutes = () => {
  return (
    <main className='flex flex-row'>

      <NavBar />

      <Routes>

          <Route path="/quiensoy" element={<QuienSoyScreen />} />
          <Route path="/listdinos" element={<ListDinosScreen />} />
          <Route path="/dino/:dinoId" element={<DinoScreen />} />
          

          <Route path="/" element={<ListDinosScreen />} />

      </Routes>
      
    </main>
  )
}
