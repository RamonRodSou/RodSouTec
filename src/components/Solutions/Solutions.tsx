import React, { useEffect, useState } from 'react'
import { Grid, styled, Typography } from '@mui/material';
import fetchList from '../../service/fetchList';
import ISolution from '../../interface/ISolution';

type Props = {
    item?: () => Promise<ISolution[]>
}

const CardUl = styled('ul')({
    display:'flex',
    justifyContent:'center',
    padding:'4rem'
})

const CardList = styled('li')({
    width: '20%',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '1rem',
    margin: '.2rem',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'var(--cardBoxBg-color)',

    '&:hover': {
        backgroundColor: 'var(--cardBoxBgHover-color)',
        transform: 'scale(.9)'

    },

})
const Solutions = ({ item }: Props) => {
    const [items, setItems] = useState<ISolution[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetchList();
            setItems(response);
        })();
    }, [item])

    return (
        <CardUl         >
            {
                items.map((item) => (
                    <CardList key={item.id} >
                        <Grid display={'flex'} alignItems={'center'} gap={1}>
                            <img src={item.img} alt={item.name} width={50} height={50} />
                            <Typography variant='body1'>{item.name}</Typography>
                        </Grid>
                        <Typography variant='body2'>{item.description}</Typography>

                    </CardList>
                ))
            }
        </CardUl>
    )
}

export default Solutions