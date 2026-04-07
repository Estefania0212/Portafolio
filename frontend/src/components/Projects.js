import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import portafolio from '../images/Portafolio.PNG';
import reddan from '../images/reddan.png';
import styles from "../styles/Projects.module.css";
import preoperacional from '../images/Preoperacional.png';
import calculadoraalfabetos from '../images/Calculadora-alfabetos.png';
const projects = [
  {
    title: "Calculadora de Conjuntos",
    description: "Aplicación en PHP que realiza operaciones sobre conjuntos.",
    image: calculadoraalfabetos,
    demo: "calculadora-de-lenguajes-formales-interactiva-production.up.railway.app",
    link: "https://github.com/Estefania0212/Calculadora-de-Lenguajes-Formales-Interactiva",
    category: "Web"
  },
  {
    title: "Sistema",
    description: "Proyecto para una empresa financiera usando microservicios.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuusuario/sistema-riesgos",
    category: "Backend"
  },
  {
    title: "App de Preoperacionales",
    description: "Desarrollo en PHP para gestión de vehículos en Asfaltar S.A.S.",
    demo: "https://web-production-2a69f.up.railway.app",
    image: preoperacional,
    link: "https://github.com/Estefania0212/Preoperacional-Trabajo-de-Grado-",
    category: "Móvil"
  },
  {
    title: "Portafolio",
    description: "Desarrollo de portafolio personal usando React y Node.js",
    image: portafolio,
    github: "https://github.com/Estefania0212/Portafolio",
    demo: "https://portafolio-git-main-estefania0212s-projects.vercel.app/",
    category: "Backend"
  },
  {
    title: "RedDan Technology (Proyecto de Aula)",
    description: "Desarrollo de un sistema de control de acceso y aforo usando Java y PostgresSQL.",
    image: reddan,
    link: "https://github.com/Estefania0212/Sistema-de-Control-de-Acceso-y-Aforo-Red-Dan-Technology-Proyecto-de-Aula-o",
    category: "Backend"
  }
];

const categories = ["Todos", "Web", "Backend", "Móvil"];

const Projects = ({ title, id }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>

        <Typography variant="h2"
                  sx={{ fontFamily: "cursive", textAlign: "center", color: "#fff" }}>
              {title}
        </Typography><br></br>

        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={(e, newCategory) => newCategory && setSelectedCategory(newCategory)}
          className={styles.filterButtons}
        >
          {categories.map((category) => (
            <ToggleButton key={category} value={category} className={styles.toggleBtn}>
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Grid
          container
          spacing={7}
          justifyContent="center"
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          {filteredProjects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={filteredProjects.length === 1 ? 12 : 6}
              md={filteredProjects.length === 1 ? 6 : 4}
              key={index}
              className={styles.gridItem}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />

                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>

                  <Typography variant="body2" className={styles.description}>
                    {project.description}
                  </Typography>

                  <Button
                    variant="contained"
                    className={styles.btnProject}
                    href={project.link}
                    target="_blank"
                  >
                    Ver Proyecto
                  </Button>
                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

      </div>
    </section>
  );
};

export default Projects;