import { Box, styled, Typography } from '@mui/material'
import LogoImg from '../../assets/img/Logo.webp'

type Props = {
  size? : number | 60

}

const TituloLogo = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: 'Orbitron',
  width: '80%',
  background: 'linear-gradient(to right, #84019e, #4c7add)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
})
const Logo = (props: Props) => {
  return (
    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'.5rem'}>
        <img src={LogoImg} alt="Logo do Site RodSouDev Tech" width={props.size} height={props.size}/>
        <TituloLogo>RodSouTech</TituloLogo>
    </Box>
  )
}

export default Logo