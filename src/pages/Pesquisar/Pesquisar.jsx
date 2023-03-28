import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ChatContext } from '../../context/ChatGpt'
import api from '../../services/api'
import styles from './Pesquisar.module.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons"

const Pesquisar = () => {
  const { chat, setChat } = useContext(ChatContext)
  const [filmes, setFilmes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/search/movie?query=' + chat).then(({ data }) => {
      setFilmes(data.results)
    })
  }, [chat])

  const handleClick = (id) => {
    navigate(`/detalhe/${id}`)
  }

  return (
    <div className="container">
      <h3 className='text-white mt-5 mb-2'>Resultado da Pesquisa</h3>
      <Carousel fade>
        {
          filmes.length > 0 && filmes.map((filme) => (
            <Carousel.Item key={filme.id}>
              <div className={styles.overlay} />
              <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt="" />
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

export default Pesquisar