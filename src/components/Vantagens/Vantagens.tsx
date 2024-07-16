import React, { useEffect, useState } from 'react'
import { Grid, styled, Typography } from '@mui/material';
import { fetchListVantagens } from '../../service/fetchList';
import IVantagem from '../../interface/IVantagem';

type Props = {
    item?: () => Promise<IVantagem[]>
    
}

const CardUl = styled('ul')({
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    padding:'0',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 '

})

const CardList = styled('li')({
    width: '31.18%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1rem',
    transition: 'transform 0.3s ease-in-out',
    // backgroundColor: 'var(--cardBoxBg-color)',

    '&:nth-child(odd)': {
        // backgroundColor:'var(--cardBoxBgVan-color)',
        background:' linear-gradient(40deg, var(--cardBoxBgVan-color), var(--cardBoxBgVan2-color))',

    },

    '&:nth-child(even)': {
        // backgroundColor: 'var(--cardBoxBgVan2-color)',
        background:' linear-gradient(40deg, var(--cardBoxBgVan2-color), var(--cardBoxBgVan-color))',

    },

    '&:hover': {
        background:' linear-gradient(180deg, var(--cardBoxBgVan-color), var(--cardBoxBgVan2-color))',
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
        <CardUl>
            {
                items.map((item) => (
                    <CardList key={item.id} >
                        <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={1}>
                            <img src={item.img} alt={item.title} width={50} height={50} />
                            <Typography variant='body1' fontSize={'1.5rem'} textAlign={'center'}>{item.title}</Typography>
                        </Grid>
                        <Typography variant='body2' textAlign={'center'}>{item.description}</Typography>
                    </CardList>
                ))
            }
        </CardUl>
    )
}

export default Vantagens