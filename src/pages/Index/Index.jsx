import React from 'react'
import FilmesComedia from '../../components/FilmesComedia/FilmesComedia'
import FilmesDestaques from '../../components/FilmesDestaques/FilmesDestaques'
import FilmesPopulares from '../../components/FilmesPopulares/FilmesPopulares'


const Index = () => {
  return (
    <>
      <FilmesDestaques/>
      <FilmesPopulares/>
      <FilmesComedia/>
      <div className='mb-5 pb-5 mt-5'></div>
    </>
  )
}

export default Index