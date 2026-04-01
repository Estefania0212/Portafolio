import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
const Contact = ({ title, id }) => {
  return (
    <Section>
       <div  id={id} sx={{ maxwidth:"88vw", margin: "0 auto"}}>
         <Typography variant= "h3">{title}</Typography>
      </div>
    </Section>
   
  )
}

// Estilos
const Section = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  color: '#ff00dc',
  background: 'black',
  overflowX: 'hidden',
}));


export default Contact;