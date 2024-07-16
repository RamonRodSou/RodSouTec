import React, { useEffect, useState } from 'react'
import { Box, Grid, styled, Typography } from '@mui/material';
import { fetchListDuvidas } from '../../service/fetchList';
import IDuvidas from '../../interface/IDuvidas';

type Props = {
    item?: () => Promise<IDuvidas[]>

}

const ContainerDuvidas = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '3rem 0',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',
    margin: '3rem 0 ',
    borderRadius:'5px',


})
const Titulo = styled('h2')({
    marginTop:0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
})

const CardUl = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',


})

const CardList = styled('li')({
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '1rem',
    transition: 'transform 0.3s ease-in-out',


})
const Duvidas = ({ item }: Props) => {
    const [items, setItems] = useState<IDuvidas[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetchListDuvidas();
            setItems(response);
        })();
    }, [item])

    return (
        <ContainerDuvidas>
            <Titulo>Duvidas?</Titulo>
            <CardUl>

                {
                    items.map((item) => (
                        <CardList key={item.id} >
                            <Typography variant='body1' fontSize={'1.5rem'} fontWeight={'bold'}>{item.id} - {item.title}</Typography>
                            <Typography variant='body2' fontSize={'1rem'} >{item.description}</Typography>
                        </CardList>
                    ))
                }
            </CardUl>
        </ContainerDuvidas>
    )
}

export default Duvidas