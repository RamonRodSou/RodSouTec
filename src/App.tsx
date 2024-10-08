import Home from "./Home/Home"
import '../src/_color.css'
import { Box, Container, styled } from "@mui/material"
import Header from "./components/Header/Header"
import Apresentacao from "./components/Apresentacao/Apresentacao"
import bg from './assets/bgm.webp'
import Solutions from "./components/Solutions/Solutions"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Projetos from "./components/Projetos/Projetos"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

function App() {

  function handleUpPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      })
  }

  const ContainerApresentacao = styled(Box)({
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    }
  })

  const ContainerP = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    position: 'relative',
    zIndex: 1,
    padding: '1rem',
  })

  const Site = styled(Box)({
    background: 'linear-gradient(90deg, #000c29, #84019e)',
  })

  const StyledFadeInBox = styled(Box) ({
    cursor:'pointer',
    opacity: 0,
    animation: `fadeIn 3s ease-out forwards`,
    animationDelay: '4s',
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    zIndex: 99,
    position: 'fixed',
    bottom: '.5rem',
    right: '.2rem',
  })

  return (
    <BrowserRouter>
      <Site>
        <Routes>
          <Route path="/" element={
            <>
              <ContainerApresentacao>
                <ContainerP maxWidth="xl">
                  <Header />
                  <Apresentacao />
                  <Solutions />
                </ContainerP>
              </ContainerApresentacao>
              <Home />
            </>
          } />

          <Route path="/projetos" element={
            <Container maxWidth="xl" sx={{ padding: '1rem' }}>
              <Header />
              <Projetos />
            </Container>
          } />

        </Routes>

      </Site>

      <StyledFadeInBox onClick={handleUpPage}>
        <ArrowCircleUpIcon fontSize="large" />
      </StyledFadeInBox>

    </BrowserRouter>
  )
}

export default App
