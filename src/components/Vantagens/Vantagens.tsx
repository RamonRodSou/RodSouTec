import { useEffect, useState } from 'react'
import { Grid, styled, Typography } from '@mui/material';
import { fetchListVantagens } from '../../service/fetchList';
import IVantagem from '../../interface/IVantagem';
import { Fade } from "react-awesome-reveal";

type Props = {
    item?: () => Promise<IVantagem[]>
}

const CardUl = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0',
    margin: '4rem 0',
})


const Titulo = styled(Typography)(({ theme }) => ({

    variant: 'body1',
    fontSize: '1.5rem',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        marginBottom: '.3rem'
    },
}))

const CardList = styled('li')(({ theme }) => ({
    width: '31.18%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1rem',
    transition: 'transform 0.3s ease-in-out',

    '&:nth-child(odd)': {
        background: ' linear-gradient(40deg, var(--cardBoxBgVan-color), var(--cardBoxBgVan2-color))',
    },

    '&:nth-child(even)': {
        background: ' linear-gradient(40deg, var(--cardBoxBgVan2-color), var(--cardBoxBgVan-color))',
    },

    '&:hover': {
        background: ' linear-gradient(180deg, var(--cardBoxBgVan-color), var(--cardBoxBgVan2-color))',
        transform: 'scale(.9)'
    },

    [theme.breakpoints.down(900)]: {
        width: '100%',
    },
}))

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
                        <Fade>
                            <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} gap={1}>
                                <img src={item.img} alt={item.title} width={50} height={50} />
                                <Titulo>{item.title}</Titulo>
                            </Grid>
                            <Typography variant='body2' textAlign={'center'}>{item.description}</Typography>
                        </Fade>
                    </CardList>
                ))
            }
        </CardUl>
    )
}

export default Vantagens