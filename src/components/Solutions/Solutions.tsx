import React, { useEffect, useState } from 'react'
import { Grid, styled, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { fetchListSolution } from '../../service/fetchList'
import ISolution from '../../interface/ISolution'
import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
    item?: () => Promise<ISolution[]>
}

const CardUl = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
    listStyleType: 'none',

})

const SliderCardUl = styled(Slider)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem',
    listStyleType: 'none',
    width: '80%',
    margin: '0 auto'

})

const CardList = styled('li')(({ theme }) => ({
    width: '100%',
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
        transform: 'scale(.9)',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
        height: '110px',
        padding:'0'

    },
}))

const Solutions = ({ item }: Props) => {
    const [items, setItems] = useState<ISolution[]>([])
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        (async () => {
            const response = await fetchListSolution()
            setItems(response)
        })()
    }, [item])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: null,
        prevArrow: null,
        arrows:false
    }

    return (
        <CardUl as={isMobile ? SliderCardUl : CardUl} {...(isMobile ? settings : {})}>
            {items.map((item) => (
                <CardList  key={item.id}>
                    <Grid display={'flex'} alignItems={'center'} gap={1}>
                        <img src={item.img} alt={item.name} width={50} height={50} />
                        <Typography variant='body1'>{item.name}</Typography>
                    </Grid>
                    <Typography variant='body2'>{item.description}</Typography>
                </CardList>
            ))}
        </CardUl>
    )
}

export default Solutions
