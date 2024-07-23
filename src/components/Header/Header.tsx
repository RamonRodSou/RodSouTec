import Logo from '../Logo/Logo'
import { Box, styled } from '@mui/material'
import Navegacao from '../Navegacao/Navegacao'

const BoxHeader = styled(Box)(({ theme }) => ({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  margin:'0 0 2rem 0',
  
 
  [theme.breakpoints.down('md')]: {
    margin:'0 0 .7rem 0',

  },
}))

const Header = () => {
  return (
    <BoxHeader> 
      <Logo/>
      <Navegacao />
    </BoxHeader>
  )
}

export default Header