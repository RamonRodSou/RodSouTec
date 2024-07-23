import { Container } from '@mui/material'
import Projetos from '../components/Projetos/Projetos'
import Vantagens from '../components/Vantagens/Vantagens'
import Duvidas from '../components/Duvidas/Duvidas'
import FaleConosco from '../components/FaleConosco/FaleConosco'
import Footer from '../components/Footer/Footer'

const Home = () => {

    return (
        <Container maxWidth="xl" sx={{'padding':'3 rem 0'}} >
            <Projetos/>
            <Vantagens/>
            <Duvidas/>
            <FaleConosco/>
            <Footer/>
        </Container>
    )
}

export default Home