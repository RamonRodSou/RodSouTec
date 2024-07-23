import Home from "./Home/Home"
import '../src/_color.css'
import { Box, Container, styled } from "@mui/material"
import Header from "./components/Header/Header"
import Apresentacao from "./components/Apresentacao/Apresentacao"
import bg from './assets/bgm.webp'
import Solutions from "./components/Solutions/Solutions"

function App() {

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

  return (
    <>
      <ContainerApresentacao>
        <ContainerP maxWidth="xl">
          <Header />
          <Apresentacao />
          <Solutions/>

        </ContainerP>
      </ContainerApresentacao>
      <Site>
        <Home />
      </Site>
    </>
  )
}

export default App
