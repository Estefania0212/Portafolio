import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import TypeWriterEffect from "react-typewriter-effect";
import images from '../images/estefania.jpg';
import fondo from '../images/Programming.jpg';
import pdf from "../images/cv.pdf";

const Home = ({ title, id }) => {
  return (
    <Section id={id}>
      <Container>
        <Typography variant="h3">
          {title}
        </Typography>

        <StyledCard>
          <CardMedia className="perfil" image={images} title="Estefanía Moreno Reyes" />

          <CardContent>
            <Typography variant="h6" className="nombre">
              ESTEFANIA MORENO REYES
            </Typography>
            <Typography variant="body2">
              <TypeWriterEffect
                text="Tecnóloga en Desarrollo de Sistemas Informáticos"
                textStyle={{ color: "#fff", textAlign: 'center', fontFamily: "Roboto", fontSize: 11 }}
                startDelay={100}
                cursorColor="black"
                typeSpeed={100}
              />
            </Typography>
          </CardContent>

          <CardActions>
            <StyledButton>
              <a href={pdf} download className="download-link">
                Descargar CV
              </a>
            </StyledButton>
          </CardActions>
        </StyledCard>
      </Container>
    </Section>
  );
};

// Estilos con MUI Styled Components
const Section = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${fondo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowX: 'hidden',
});

const Container = styled(Box)({
  maxWidth: "88vw",
  margin: "0 auto",
  textAlign: "center",
});

const StyledCard = styled(Card)({
  backgroundColor: "#121212",
  maxWidth: 390,
  borderRadius: "5%",
  margin: "0 auto",
  maxHeight: 400,
  textAlign: "center",
  "& .perfil": {
    width: 150,
    height: 150,
    padding: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto",
    marginTop: "20px",
    border: "7px solid #ff0099",
  },
  "& .nombre": {
    textAlign: 'center',
    color: "#fff",
    fontWeight: 900,
    borderBottom: "2px solid #ff0099",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#ff0099",
      transform: "scale(1.1)",
    },
  },
});

const StyledButton = styled(Button)({
  margin: '0 auto',
  background: "linear-gradient(45deg, #ff0099, #ff00dc)",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #ff00dc, #ff0099)",
    transform: "scale(1.05)",
  },
  "& .download-link": {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
  },
});

export default Home;
