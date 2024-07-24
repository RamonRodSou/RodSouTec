import { useEffect, useState } from 'react'
import { Box, styled, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { fetchListSolution } from '../../service/fetchList'
import ISolution from '../../interface/ISolution'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fade } from "react-awesome-reveal"

type Props = {
    item?: () => Promise<ISolution[]>
}

const CardBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
    listStyleType: 'none',
    paddingTop: '2rem'
})

const SliderCardSlader = styled(Slider)(({ theme }) => ({
    padding: '1rem .5rem',
    listStyleType: 'none',
    width: '100%',
    margin: '0 auto',


    [theme.breakpoints.down('md')]: {
        padding: '.5rem 0',
        height: '90px',
        borderRadius: '0',

    },
}))

const Card = styled(Box)(({ theme }) => ({
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
    [theme.breakpoints.down('md')]: {
        padding: '.5rem 0',
        height: '120px',
        borderRadius: '0',

    },
}))

const BoxImgTitulo = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '.5rem 1rem'
    },
}))

const Solutions = ({ item }: Props) => {
    const [items, setItems] = useState<ISolution[]>([])
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    useEffect(() => {
        (async () => {
            const response = await fetchListSolution()
            setItems(response)
        })()
    }, [item])

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    }

    return (
        <Fade direction="up" delay={1000}>
            <Box marginBottom={'2rem'}>
                {isMediumScreen || isSmallScreen ? (
                    <SliderCardSlader {...settings}>
                        {items.map((item) => (
                            <Card key={item.id}>
                                <BoxImgTitulo>
                                    <img src={item.img} alt={item.name} width={50} height={50} />
                                    <Typography variant='body1'>{item.name}</Typography>
                                </BoxImgTitulo>
                                <Typography variant='body2' padding={'0 .8rem'}>{item.description}</Typography>
                            </Card>
                        ))}
                    </SliderCardSlader>
                ) : (
                    <CardBox>
                        {items.map((item) => (
                            <Card key={item.id}>
                                <BoxImgTitulo>
                                    <img src={item.img} alt={item.name} width={50} height={50} />
                                    <Typography variant='body1'>{item.name}</Typography>
                                </BoxImgTitulo>
                                <Typography variant='body2' padding={'0 .5rem'}>{item.description}</Typography>
                            </Card>
                        ))}
                    </CardBox>
                )}
            </Box>
        </Fade>

    )
}

export default Solutions
