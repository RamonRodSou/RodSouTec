import React from 'react'
import Header from '../components/Header/Header'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import { Container } from '@mui/material'
import Solutions from '../components/Solutions/Solutions'
import Projetos from '../components/Projetos/Projetos'
import Vantagens from '../components/Vantagens/Vantagens'
import Duvidas from '../components/Duvidas/Duvidas'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <Header />
            <Apresentacao />
            <Solutions/>
            <Projetos/>
            <Vantagens/>
            <Duvidas/>
        </Container>
    )
}

export default Home