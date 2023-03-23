import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bombando from './pages/Bombando/Bombando'
import Detalhe from './pages/Detalhe/Detalhe'
import Error404 from './pages/Error404/Error404'
import Filmes from './pages/Filmes/Filmes'
import Index from './pages/Index/Index'
import Series from './pages/Series/Series'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/filmes' element={<Filmes/>}/>
      <Route path='/bombando' element={<Bombando/>}/>
      <Route path='/detalhe/:id' element={<Detalhe/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
  )
}

export default MyRoutes