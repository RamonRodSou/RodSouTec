import React, { useEffect, useState } from 'react'
import { Grid, styled, Typography } from '@mui/material';
import { fetchListVantagens } from '../../service/fetchList';
import IVantagem from '../../interface/IVantagem';

type Props = {
    item?: () => Promise<IVantagem[]>
    
}

const CardUl = styled('ul')({
    display:'flex',
    justifyContent:'space-between',
    flexWrap:'wrap',
    padding:'0',
})

const CardList = styled('li')({
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'var(--cardBoxBg-color)',

    '&:hover': {
        backgroundColor: 'var(--cardBoxBgHover-color)',
        transform: 'scale(.9)'

    },

})
const Vantagens = ({ item }: Props) => {
    const [items, setItems] = useState<IVantagem[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetchListVantagens();
            setItems(response);
        })();
    }, [item])

    return (
        <CardUl         >
            {
                items.map((item) => (
                    <CardList key={item.id} >
                        <Grid display={'flex'} alignItems={'center'} gap={1}>
                            <img src={item.img} alt={item.title} width={50} height={50} />
                            <Typography variant='body1'>{item.title}</Typography>
                        </Grid>
                        <Typography variant='body2'>{item.description}</Typography>

                    </CardList>
                ))
            }
        </CardUl>
    )
}

export default Vantagens