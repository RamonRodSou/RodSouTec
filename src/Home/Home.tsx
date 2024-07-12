import React from 'react'
import Header from '../components/Header/Header'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import { Container } from '@mui/material'
import Solutions from '../components/Solutions/Solutions'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <Header />
            <Apresentacao />
            <Solutions/>
        </Container>
    )
}

export default Home