import React from 'react'
import Logo from '../images/logo.png'
import { Typography, Button } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#eeeeee",
      justifyContent: "space-between",
      padding: isMobile ? "1.5rem" : "2rem"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}>
        <img src={Logo} alt="Logo" width={isMobile ? "50px" : "70px" } />
      </div>
      <div style={{
        marginTop: "2rem",
        width: isMobile ? "25vw" : "40vw"
      }}>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "end",
        alignItems: "center"
      }}>
        <Typography variant="body2" style={{
          marginRight: ".1em"
        }}>
          Odwiedź <strong>Nova</strong>

        </Typography>
        <Button onClick={() => {
          window.open('https://www.facebook.com/Taxi-Nova-Legnica-112532474850139', '_blank'); 
          return null
        }}
         style={{
          padding: "5px",
          color: "#ec0000",
          justifyContent: "center",
          alignItem: "center"
        }}>
          <FacebookIcon style={{
            fontSize: isMobile ? "2rem" : "3rem"
          }} />
        </Button>
        <Button onClick={() => {
          window.open('https://api.whatsapp.com/send?phone=48797258191', '_blank');
          return null
        }}  
         style={{
          padding: "5px",
          color: "#ec0000",
          justifyContent: "center",
          alignItem: "center"
        }}>
          <WhatsAppIcon style={{
            fontSize: isMobile ? "2rem" : "3rem"
          }} />
        </Button>
      </div>
    </div>
  )
}
