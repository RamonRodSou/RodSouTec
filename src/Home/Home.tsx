import { Container } from '@mui/material'
import Projetos from '../components/Projetos/Projetos'
import Vantagens from '../components/Vantagens/Vantagens'
import Duvidas from '../components/Duvidas/Duvidas'
import FaleConosco from '../components/FaleConosco/FaleConosco'
import Footer from '../components/Footer/Footer'
import ValidationContext, { validaNome, validaEmail, validaTelefone, validaServico } from '../components/ValidationContext/ValidationContext'

const Home = () => {
    return (
        <Container maxWidth="xl" sx={{ padding: '3rem 0' }}>
            <Projetos />
            <Vantagens />
            <Duvidas />
            <ValidationContext.Provider value={{
                nome: validaNome,
                emailV: validaEmail,
                telefone: validaTelefone,
                servico: validaServico,
            }}>
                <FaleConosco />
            </ValidationContext.Provider>
            <Footer />
        </Container>
    )
}

export default Home
