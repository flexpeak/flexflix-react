import React, { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MeuNavbar from './components/MeuNavbar/MeuNavbar';

const App = () => {
  useEffect(() => {
    document.title = 'FlexFlix'
  }, [])

  return (
    <MeuNavbar></MeuNavbar>
  )
}

export default App