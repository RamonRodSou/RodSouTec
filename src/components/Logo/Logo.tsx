import { Box, styled, Typography } from '@mui/material'
import LogoImg from '../../assets/img/Logo.webp'

type Props = {
  size?: number
}

const TituloLogo = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: 'Orbitron',
  width: '80%',
  background: 'linear-gradient(to right, #84019e, #4c7add)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}))

const LogoImage = styled('img')(({ theme, size }:{ theme?: any; size: number }) => ({
  width: size,
  height: size,
  [theme.breakpoints.down('sm')]: {
    width: 30,
    height: 30,
  },
}))

const Logo = (props: Props) => {
  const size = props.size || 60
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap=".5rem">
      <LogoImage src={LogoImg} alt="Logo do Site RodSouDev Tech" size={size} />
      <TituloLogo>RodSouTech</TituloLogo>
    </Box>
  )
}

export default Logo
