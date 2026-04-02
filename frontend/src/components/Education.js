import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School as SchoolIcon, Star as StarIcon, Work as WorkIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styles from "../styles/Education.module.css";

// estilos reutilizables
const contentStyles = {
  background: "#ff0099",
  color: "#fff",
  border: "1px solid #ff0099"
};

const arrowStyles = {
  borderRight: "7px solid #ff0099"
};

const iconStyles = {
  background: "#ff0099",
  color: "#fff",
  border: "2px solid #ff0099"
};

function Education({ title, id }) {
  return (
    <div id={id} className={styles.section}>

      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.timelineContainer}>
        <VerticalTimeline>

          <VerticalTimelineElement
            date="2025 - Actualidad"
            iconStyle={iconStyles}
            icon={<WorkIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>UNIDADES TECNOLOGICAS DE SANTANDER</h3>
            <h4>Ingeniería de Sistemas</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024 (4 meses)"
            iconStyle={iconStyles}
            icon={<WorkIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>Asfaltar S.A.S</h3>
            <h4>Auxiliar de Sistemas</h4>
            <p>Desarrollo de una aplicación web en PHP.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2021 - 2023"
            iconStyle={iconStyles}
            icon={<WorkIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>Unidades Tecnologicas de Santander</h3>
            <h4>Tecnología en Desarrollo de Sistemas</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2020 - 2022"
            iconStyle={iconStyles}
            icon={<WorkIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>SENA</h3>
            <h4>Técnico en Programación</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={iconStyles}
            icon={<SchoolIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>MULTICOMPUTO</h3>
            <h4>Soporte técnico</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2014 - 2019"
            iconStyle={iconStyles}
            icon={<SchoolIcon />}
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
          >
            <h3>Colegio Aurelio Martínez</h3>
            <h4>Bachiller</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#00c853", color: "#fff" }}
            icon={<StarIcon />}
          />

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;