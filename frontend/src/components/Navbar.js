import { AppBar, Toolbar, List, IconButton, Drawer, Divider, ListItem, Typography, ListItemIcon } from '@mui/material'
import {React, useState} from 'react'
import { Link } from 'react-scroll'
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from '@mui/icons-material/Cancel';
import SchoolIcon from '@mui/icons-material/School';
import styles from "../styles/Navbar.module.css";




//array
const links = [
  {
    id:"home",
    text:"INICIO",
    icon: <HomeIcon fontSize='large' sx={{ color: "#fff", "&:hover": { color: "#ff0099", transform: "scale(1.05)" }, transition: "transform 0.3s ease, color 0.3s ease" }} />
  },
  {
    id:"about",
    text:"SOBRE MI",
    icon: <PersonIcon fontSize='large' sx={{ color: "#fff",  "&:hover": { color: "#ff0099" } ,transform: "scale(1.05)"  }} />
  },
  {
    id:"skills",
    text:"HABILIDADES",
    icon: <TipsAndUpdatesSharpIcon fontSize='large' sx={{ color: "#fff",  "&:hover": { color: "#ff0099" } ,transform: "scale(1.05)"  }}/>
  },
  {
    id:"projects",
    text:"PROYECTOS",
    icon: <FolderIcon fontSize='large' sx={{ color: "#fff",  "&:hover": { color: "#ff0099" } ,transform: "scale(1.05)"  }}/>
  },
  {
    id:"education",
    text:"EDUCACION",
    icon: <SchoolIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "#ff0099" }, transform: "scale(1.05)" }} />
  },
  {
    id:"contact",
    text:"CONTACTO",
    icon:<PhoneIphoneRoundedIcon fontSize='large' sx={{ color: "#fff",  "&:hover": { color: "#ff0099" } ,transform: "scale(1.05)"  }}/>
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar position="sticky" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        
        <Typography className={styles.logo}>
          ESTEFANIA
        </Typography>

        <List className={styles.navList}>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {text}
            </Link>
          ))}
        </List>

        <IconButton edge="end" onClick={() => setOpen(!open)}>
          <MenuIcon className={styles.menuIcon} />
        </IconButton>

      </Toolbar>
    </AppBar>
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ className: styles.drawer }}
    >
      <IconButton onClick={() => setOpen(false)}>
        <CancelIcon sx={{ color: "#ff0099" }} />
      </IconButton>

      <Divider />

      {links.map(({ id, text, icon }, index) => (
        <Link
          key={index}
          to={id}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <ListItem className={styles.drawerItem}>
            <ListItemIcon>{icon}</ListItemIcon>
            {text}
          </ListItem>
        </Link>
      ))}
    </Drawer>
    </>
  )
}
export default Navbar