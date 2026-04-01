import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Card, CardContent, CardMedia, Button, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";

const projects = [
  {
    title: "Calculadora de Conjuntos",
    description: "Aplicación en PHP que realiza operaciones sobre conjuntos.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuusuario/calculadora-conjuntos",
    category: "Web"
  },
  {
    title: "Sistema de Gestión de Riesgos",
    description: "Proyecto para una empresa financiera usando microservicios.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuusuario/sistema-riesgos",
    category: "Backend"
  },
  {
    title: "App de Preoperacionales",
    description: "Desarrollo en PHP para gestión de vehículos en Asfaltar S.A.S.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuusuario/preoperacionales",
    category: "Móvil"
  },
  {
    title: "App de Preoperacionales",
    description: "Desarrollo en PHP para gestión de vehículos en Asfaltar S.A.S.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuusuario/preoperacionales",
    category: "Móvil"
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
    <Section id={id}>
      <Container>
        <Typography variant="h3" className="title">
          {title}
        </Typography>

        {/* Filtros */}
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={(e, newCategory) => newCategory && setSelectedCategory(newCategory)}
          className="filter-buttons"
        >
          {categories.map((category) => (
            <ToggleButton key={category} value={category} className="toggle-btn">
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        {/* Lista de Proyectos */}
        <Grid container spacing={7} justifyContent="center"  sx={{ display: "flex",  alignItems: "stretch" }}>
          {filteredProjects.map((project, index) => (
            <Grid  item xs={12} 
            sm={filteredProjects.length === 1 ? 12 : 6} 
            md={filteredProjects.length === 1 ? 6 : 4} 
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <StyledCard>
                <CardMedia component="img" height="180" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2" className="description">
                    {project.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    className="btn-project"
                    href={project.link}
                    target="_blank"
                  >
                    Ver Proyecto
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

// Estilos con styled-components
const Section = styled("section")(() => ({
  minHeight: "100vh",
  color: "#ff00dc",
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px 0",
}));

const Container = styled("div")(() => ({
  maxWidth: "88vw",
  margin: "0 auto",
  textAlign: "center",

  ".title": {
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  ".filter-buttons": {
    marginBottom: "30px"
  },

  ".toggle-btn": {
    color: "white",
    borderColor: "#f321a3",
    "&.Mui-selected": { background: "#f321a3", color: "white" },
    "&:hover": { background: "#d20e84", color: "white" }
  }
}));

const StyledCard = styled(Card)(() => ({
  flexGrow: 1,
  justifyContent: 'space-between',
  background: "#222",
  color: "#fff",
  borderRadius: "10px",
  transition: "0.3s",
  minWidth: "300px",
  flexDirection: 'column', // Asegura que el contenido se apile correctamente
  alignItems: 'center',
  width: '100%',
  height: '100%', 
  "&:hover": { transform: "scale(1.05)" },

  ".description": {
    marginBottom: "10px",
    opacity: 0.8
  },

  ".btn-project": {
    background: "#f321a3",
    "&:hover": { background: "#d20e84" }
  }
}));

export default Projects;
