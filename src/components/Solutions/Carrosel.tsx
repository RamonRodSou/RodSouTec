import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';

type Props = {};

const items = [
  {
    name: "Criação de Sites",
    description: "Criação de sites para pequenas e médias empresas, com foco em sites responsivos e de fácil manutenção.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Criação de Landing Pages",
    description: "Páginas institucionais, escritórios, barbearias, uma identidade para o seu negócio.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Criação de Aplicativos",
    description: "Aplicativos para celular, web ou desktop.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Criação de Sistemas",
    description: "Sistemas para o seu comércio.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Criação de Automações",
    description: "Aplicativos automatizados para economizar tempo em seu trabalho ou negócio.",
    img: "https://via.placeholder.com/300x200",
  },
];

const Carrosel = (props: Props) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box width="100%">
        <Carousel
          animation="slide"
          duration={3000}
          interval={6000}
          stopAutoPlayOnHover={true}
          swipe
          navButtonsAlwaysVisible
          autoPlay={true}
          stopAutoPlayOnHover={true}
          cycleNavigation={true}
          indicators={false}

        >
          {items.map((item, index) => (
            <Paper key={index} style={{ padding: '20px', textAlign: 'center', width: '30%' }}>
              <Box>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Check it out!
                </Button>
              </Box>
            </Paper>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Carrosel;
