import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactCardFlip from 'react-card-flip';
import { Typewriter } from 'react-simple-typewriter';
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  FaJava, FaPhp, FaJs, FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaBootstrap,
  FaLightbulb, FaUsers, FaBrain, FaClipboardList, FaComments, FaSyncAlt,
  FaHeart, FaBookOpen, FaCheckCircle
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

import styles from "../styles/Skills.module.css";


const StarRating = ({ stars }) => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < stars ? "#FFD700" : "#ccc"} size={20} />
    ))}
  </div>
);

// skills 
const skills = [
  { name: "Java", icon: <FaJava color="#f89820" fontSize={160} />, rating: 4 },
  { name: "PHP", icon: <FaPhp color="#8892BF" fontSize={160} />, rating: 4 },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" fontSize={160} />, rating: 3 },
  { name: "Laravel", icon: <FaLaravel color="#FF2D20" fontSize={160} />, rating: 4 },
  { name: "React", icon: <FaReact color="#61DAFB" fontSize={160} />, rating: 5 },
  { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" fontSize={160} />, rating: 2 },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" fontSize={160} />, rating: 5 },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" fontSize={160} />, rating: 5 },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" fontSize={160} />, rating: 5 },
  { name: "MySQL", icon: <SiMysql color="#4479A1" fontSize={160} />, rating: 5 },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" fontSize={160} />, rating: 4 },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" fontSize={160} />, rating: 3 }
];

// soft skills 
const softSkills = [
  { name: "Disciplinada", icon: <FaClipboardList fontSize={80} color="#fff" /> },
  { name: "Comunicación asertiva", icon: <FaComments fontSize={80} color="#fff" /> },
  { name: "Adaptación rápida", icon: <FaSyncAlt fontSize={80} color="#fff" /> },
  { name: "Organizada y Perfeccionista", icon: <FaClipboardList fontSize={80} color="#fff" /> },
  { name: "Resolución de problemas", icon: <FaBrain fontSize={80} color="#fff" /> },
  { name: "Creatividad y proactividad", icon: <FaLightbulb fontSize={80} color="#fff" /> },
  { name: "Trabajo en equipo", icon: <FaUsers fontSize={80} color="#fff" /> },
  { name: "Empatía", icon: <FaHeart fontSize={80} color="#fff" /> },
  { name: "Aprendizaje ágil", icon: <FaBookOpen fontSize={80} color="#fff" /> },
  { name: "Compromiso y responsabilidad", icon: <FaCheckCircle fontSize={80} color="#fff" /> },
];

const FlipCard = ({ name, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={styles.cardFront} onClick={() => setIsFlipped(true)}>
        {icon}
      </div>

      <div className={styles.cardBack} onClick={() => setIsFlipped(false)}>
        <span className={styles.cardTitle}>{name}</span>
      </div>
    </ReactCardFlip>
  );
};

const Skills = ({ title, id }) => (
  <div id={id} className={styles.section}>

    <Typography variant="h2"
          sx={{ fontFamily: "cursive", textAlign: "center", color: "#fff" }}>
      {title}
    </Typography>

    <Typography className={styles.subtitleWrapper}>
      <span className={styles.title}>
        <Typewriter words={["Habilidades Técnicas"]} loop={0} cursor cursorStyle="|" />
      </span>
    </Typography>

    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className={styles.skillBox}>
            <div className={styles.iconWrapper}>{skill.icon}</div>
            <span>{skill.name}</span>
            <StarRating stars={skill.rating} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <Typography className={styles.subtitleWrapper}>
      <span className={styles.title}>
        <Typewriter words={["Habilidades Blandas"]} loop={0} cursor cursorStyle="|" />
      </span>
    </Typography>

    <div className={styles.cardContainer}>
      {softSkills.map((skill, index) => (
        <FlipCard key={index} {...skill} />
      ))}
    </div>

  </div>
);

export default Skills;