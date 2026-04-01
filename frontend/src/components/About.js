import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "../styles/About.module.css";

const About = ({ title, id }) => {
  return (
    <div className={styles.section} id={id}>

      <Box className={styles.content}>

        <Typography
          variant="h2"
          sx={{ fontFamily: "cursive", textAlign: "center", color: "#fff" }}
        >
          {title}
        </Typography>

        <Typography className={styles.introductionText}>
          <span className={styles.highlight}>
            Hola, soy Estefanía Moreno Reyes
          </span>{" "}
          estudiante de Ingeniería de Sistemas apasionada por el desarrollo de
          software, con una sólida formación en el área. Tengo experiencia en
          trabajo en equipo, adaptación rápida y aprendizaje ágil. Me destaco en
          la creación de soluciones innovadoras y efectivas, y busco
          constantemente oportunidades para optimizar procesos.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >

          {/* Datos Personales */}
          <div className={styles.card}>

            <Typography className={styles.cardTitle}>
              Datos Personales
            </Typography>

            <div className={styles.infoGrid}>

              <div className={styles.infoColumn}>
                {[
                  "Ubicación",
                  "Cumpleaños",
                  "Correo",
                  "Teléfono",
                  "LinkedIn",
                ].map((item, index) => (
                  <Typography key={index} className={styles.infoLabel}>
                    {item}
                  </Typography>
                ))}
              </div>

              <div className={styles.infoColumn}>
                <Typography className={styles.infoValue}>
                  Bucaramanga-Santander
                </Typography>

                <Typography className={styles.infoValue}>
                  14-12-2002
                </Typography>

                <Typography className={styles.infoValue}>
                  estefaniamoreno0212@gmail.com
                </Typography>

                <Typography className={styles.infoValue}>
                  +57 3173122043
                </Typography>

                <Typography className={styles.infoValue}>
                  <a
                    href="http://www.linkedin.com/in/estefania-moreno-373ab01bb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Estefania Moreno
                  </a>
                </Typography>
              </div>

            </div>
          </div>

          {/* Intereses */}
          <div className={styles.card}>

            <Typography className={styles.cardTitle}>
              Intereses
            </Typography>

            <div className={styles.interestGrid}>
              {[
                "Desarrollo Web y Móvil",
                "Lectura",
                "Viajar",
                "Deportes",
                "Aprendizaje Continuo",
                "Escuchar Música",
              ].map((interest, index) => (
                <div key={index} className={styles.interestItem}>
                  {interest}
                </div>
              ))}
            </div>

          </div>

        </Box>

      </Box>
    </div>
  );
};

export default About;