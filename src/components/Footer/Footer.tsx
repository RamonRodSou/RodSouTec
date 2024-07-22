import { styled } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'

type Props = {}

const Rodape = styled('footer')(({ theme }) => ({
    textAlign: 'center',
    padding: '2rem',
    margin: '5rem 3rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
        margin: '5rem 0 0',
        padding: '.5rem',
        fontSize:'.8rem'

    }
}))



const Footer = (props: Props) => {
    return (
        <Rodape>
            <Logo size={35} />
            <p>© Copyright Ramon Rodrigues - Since 2023</p>
        </Rodape>
    )
}

export default Footer