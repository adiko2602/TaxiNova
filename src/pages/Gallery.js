import { Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMediaQuery, useTheme } from '@mui/material'
import image001 from '../images/image001.jpg'
import image002 from '../images/image002.jpg'
// import image003 from '../images/image003.jpg' 
// import image004 from '../images/image004.jpg' 
// import image005 from '../images/image005.jpg' 
// import image006 from '../images/image006.jpg'

export default function Gallery() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imagesUrl = [
    image001, image002
    //, image003, image004, image005, image006
  ]

  return (
    <div>
      <Header />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} style={{
            backgroundColor: "#ec0000",
            color: "white",
            minHeight: isMobile ? "35vh" : "45vh"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              widht: "100%",
              alignItem: "center",
              justifyContent: "center"
            }}>
              <Typography variant="h3" style={{
                margin: "auto 3vw",
                fontWeight: "normal"
              }}>
                Obejrzyj <strong>Nova</strong>.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          {imagesUrl.map(imageUrl => (
            <Grid key={imageUrl} item xs={12} md={6} >
              <img src={imageUrl} alt="Zdjęcie" style={{
                width: "100%",
                height: "100%"
              }} />
            </Grid>

          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
