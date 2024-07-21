import { styled } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'

type Props = {}

const Rodape = styled('footer')({
    textAlign:'center',
    padding:'2rem',
    margin:'5rem 0 0 3rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
    
})

const Footer = (props: Props) => {
    return (
        <Rodape>
            <Logo size={35}/>
            <p>© Copyright Ramon Rodrigues - Since 2023</p>
        </Rodape>
    )
}

export default Footer