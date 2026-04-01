import { AppBar, Toolbar, Box, List, IconButton, Drawer, Divider, ListItem, Typography, ListItemIcon } from '@mui/material'
import {React, useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from '@mui/icons-material/Cancel';
import SchoolIcon from '@mui/icons-material/School';




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
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar position="sticky" sx={{ backgroundColor: "#121212", top:0, left:0, right:0, zIndex:999}}>
      <Toolbar sx={{ display:"flex", gap: 3, justifyContent: "space-between", alignItems:"center"}}>
        <Typography sx={{ fontSize: "1.2rem",  fontFamily: "Arial", color: "#ff0099", fontWeight:900, textAlign: "left",  flexGrow: 1 }}>
        ESTEFANIA
        </Typography>
        <List sx={{ "& a": {color:"#ffffff"}, display: "flex", gap: "2rem", fontSize: "1.2rem", fontFamily: "cursive",  justifyContent: "rigth", alignItems: "center",
      [theme.breakpoints.down("sm")]: { display: "none" }  , "& a:hover": {cursor:"pointer", color:"#ff0099" ,  borderBottom: "2px solid #ff0099",transform: "scale(1.05)" }
    }} > 
            {
              links.map(({id, text}, index)=>(
                <Link key={index} to={id} spy={true} activeClass='active' smooth={true} duration={500} offset={-70}  sx={{color: "#333", textDecoration: "none", wordSpacing: "0.5rem",marginRight: "2rem"}}>{text}</Link>
              ))
            }
        </List>
        <IconButton edge="end" onClick={()=>setOpen(!open)}>
          <MenuIcon fontSize='large' sx={{ display:"none", right: 10, [theme.breakpoints.down("sm")]:{display: "block", color: "#ff0099", ml:'auto', position:"absolute", top:0} }}/>
        </IconButton>
        
      </Toolbar>
    </AppBar>
    <Drawer anchor="right"  open={open} onClose={()=>setOpen(false) } PaperProps={{sx: {backgroundColor: "#121212", width: 250, color: "#fff", fontfamily: "'Righteous',cursive"}, }}>
    <IconButton onClick={() => setOpen(false)} sx={{ display: "flex", justifyContent: "flex-end" }}>
      <CancelIcon sx={{ color: "#ff0099" }} />
    </IconButton>

      <Divider/>
      {
              links.map(({id, text, icon}, index)=>(
                <Link key={index} to={id} spy={true} activeClass='active' smooth={true} duration={500} offset={-70}  sx={{textDecoration: "none", wordSpacing: "2rem", marginRight: "2rem" ,width:"40vh", [theme.breakpoints.down("sm")]: {width: "60vh"}, "& h5": { margin: theme.spacing(1, 5, 5, 4), fontfamily: "'Righteous',cursive", fontSize: "1.6rem"}  }}>
                  <ListItem sx={{ fontFamily: "cursive", fontSize: "0.9rem", marginLeft: "1rem", "&:hover": { cursor:"pointer",color: "#ff0099", borderBottom: "2px solid #ff0099",transform: "scale(1.05)"}}}>
                      <span>
                        <ListItemIcon>
                          {icon}
                        </ListItemIcon>
                      </span>{text}
                  </ListItem>
                </Link>
              ))
            }
    </Drawer>
    </>
  )
}
export default Navbar