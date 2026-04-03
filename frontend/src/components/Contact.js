import React from 'react';
import { Typography } from '@mui/material';
import styles from "../styles/Contact.module.css";

const Contact = ({ title, id }) => {
  return (
    <div className={styles.section}>
      <div id={id} className={styles.container}>
        <Typography variant="h3">{title}</Typography>
      </div>
    </div>
  );
};

export default Contact;