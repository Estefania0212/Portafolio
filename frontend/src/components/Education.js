

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School as SchoolIcon, Star as StarIcon, Work as WorkIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { margin, styled } from "@mui/system";

function Education({ title, id }) {
  return (
    <Section id={id}>
        <Typography variant="h2" sx={{ fontFamily: "cursive", textAlign: "center", color: "#fff",  marginBottom: "40px" }}>
          {title}
        </Typography><br/><br/>

        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <VerticalTimeline tyle={{ width: "20%" }} >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="2025 - Actualidad"
                iconStyle={{ background: 'rgb(255, 4, 234)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">UNIDADES TECNOLOGICAS DE SANTANDER </h3>
                <h4 className="vertical-timeline-element-subtitle">Ingeniería de Sistemas </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="2024 (4 meses)"
                iconStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Asfaltar S.A.S</h3>
                <h4 className="vertical-timeline-element-subtitle">Auxiliar de Sistemas</h4>
                <p>Desarrollo de una aplicación web en PHP para la gestión de preoperacionales de vehículos.</p>    
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                    date="2021 - 2023"
                    iconStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                <h3 className="vertical-timeline-element-title">Unidades Tecnológicas de Santander</h3>
                <h4 className="vertical-timeline-element-subtitle">Tecnología en Desarrollo de Sistemas Informáticos</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="Noviembre 2020 - 2022"
                iconStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Servicio Nacional de Aprendizaje - SENA</h3>
                <h4 className="vertical-timeline-element-subtitle">Técnico en Programación de Software</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="2024"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">MULTICOMPUTO</h3>
                <h4 className="vertical-timeline-element-subtitle">Operario en soporte técnico y mantenimiento en computadoras</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="2014 - 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">COLEGIO AURELIO MARTINEZ MUTIS - SEDE A (Principal)                </h3>
                <h4 className="vertical-timeline-element-subtitle">Bachiller</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(243, 33, 163)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 215)' }}
                date="2008 - 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">COLEGIO AURELIO MARTINEZ MUTIS - SEDE B                </h3>
                <h4 className="vertical-timeline-element-subtitle">Primaria</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
            </VerticalTimeline>
            </div>
    

    </Section>
   
  )
}
// Estilos con MUI Styled Components


  const Section = styled('div')({
    minHeight: '200vh',
    background: '#121212',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column', // Asegura que el contenido se apile correctamente
    alignItems: 'center',
    overflowX: 'hidden',
  });

export default Education