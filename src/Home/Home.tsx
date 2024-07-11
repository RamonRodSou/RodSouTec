import React from 'react'
import Header from '../components/Header/Header'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import { Container } from '@mui/material'
import Experiencia from '../components/Experiencia/Experiencia'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <Header />
            <Apresentacao />
            <Experiencia/>
        </Container>
    )
}

export default Home