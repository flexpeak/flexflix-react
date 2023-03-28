import axios from 'axios';
import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ChatContext } from '../../context/ChatGpt';

const PesquisarFilme = () => {
    const { setChat } = useContext(ChatContext)
    const navigate = useNavigate()

    const onSubmit = (values) => {
        axios.post('https://api.openai.com/v1/chat/completions', {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "Você é um assistente que retorna uma sugestão de filme de acordo com o que o usuário pedir. Você não faz introdução nem conclusão na sua resposta. Você retorna apenas o nome do filme em português, nada além disso. Você é curto e direto."
                },
                {
                    "role": "user",
                    "content": values.search
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_CHATGPT_TOKEN
            }
        }).then(({data}) => {
            try {
                setChat(data.choices[0].message.content)
                navigate('/pesquisar')
            } catch(e) {
                console.log(e)
                setChat("")
            }
        })
    }

    const validate = (values) => {
        const errors = {}
        if (!values.search) {
            errors.search = 'É obrigatório informar um valor para pesquisa'
            toast.error(errors.search, {
                position: "top-center",
            })
        }

        return errors
    }

    return (
        <>
            <Formik initialValues={{ search: '' }} onSubmit={onSubmit} validate={validate}>
                {({ values, handleChange, handleSubmit, errors }) => (
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar Filme"
                            className="me-2"
                            isInvalid={errors.search}
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                        />

                        <Button variant="primary" type="submit">Pesquisar</Button>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    )
}

export default PesquisarFilme