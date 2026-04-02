import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import TypeWriterEffect from "react-typewriter-effect";
import images from '../images/estefania.jpg';
import fondo from '../images/Programming.jpg';
import pdf from "../images/cv.pdf";
import styles from "../styles/Home.module.css";
const Home = ({ title, id }) => {
  return (
    <div
      id={id}
      className={styles.section}
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <Box className={styles.container}>
        <Typography variant="h3">
          {title}
        </Typography>

        <Card className={styles.card}>
          <CardMedia
            className={styles.perfil}
            image={images}
            title="Estefanía Moreno Reyes"
          />

          <CardContent>
            <Typography variant="h6" className={styles.nombre}>
              ESTEFANIA MORENO REYES
            </Typography>

            <Typography variant="body2">
              <TypeWriterEffect
                text="Tecnóloga en Desarrollo de Sistemas Informáticos"
                textStyle={{
                  color: "#fff",
                  textAlign: 'center',
                  fontFamily: "Roboto",
                  fontSize: 11
                }}
                startDelay={100}
                cursorColor="black"
                typeSpeed={100}
              />
            </Typography>
          </CardContent>

          <CardActions>
            <Button className={styles.button}>
              <a href={pdf} download className={styles.downloadLink}>
                Descargar CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Home;