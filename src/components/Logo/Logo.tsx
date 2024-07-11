import { Box, styled, Typography } from '@mui/material'
import LogoImg from '../../assets/img/Logo.webp'

type Props = {}

const TituloLogo = styled(Typography)({
  fontSize:'1.2rem',
  fontWeight: 'bold',
})
const Logo = (props: Props) => {
  return (
    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'.5rem'}>
        <img src={LogoImg} alt="Logo do Site RodSouDev Tech" width={60} height={60}/>
        <TituloLogo>RodSouTech</TituloLogo>
    </Box>
  )
}

export default Logo