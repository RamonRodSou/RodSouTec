import React from 'react'
import Logo from '../Logo/Logo'
import { Box } from '@mui/material'
import Navegacao from '../Navegacao/Navegacao'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} margin={'2rem 0'}> 
      <Logo/>
      <Navegacao />
    </Box>
  )
}

export default Header