import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import api from '../../services/api'
import styles from './FilmesDestaques.module.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

const FilmesDestaques = () => {
  const [filmesDestaques, setFilmesDestaques] = useState([])
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/detalhe/${id}`)
  }

  useEffect(() => {
    api.get('/discover/movie?sort_by=vote_count.desc').then(({ data }) => {
      setFilmesDestaques(data.results.slice(0, 5))
    })
  }, [])

  return (
    <div className="container">
      <Carousel fade>
        {
          filmesDestaques.length > 0 && filmesDestaques.map((filme) => (
            <Carousel.Item key={filme.id}>
              <div className={styles.overlay} />
              <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt=""/>
              <Carousel.Caption>
                <h3>{filme.title}</h3>
                <p>{filme.overview}</p>
                <div>
                  <Button variant="primary me-4">
                    <FontAwesomeIcon icon={faPlay} className="me-2" />
                    Assistir
                  </Button>
                  <Button variant="secondary" onClick={() => handleClick(filme.id)}>
                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                    Mais informações
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default FilmesDestaques