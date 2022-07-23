import { Typography, Grid } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import about from '../images/about.jpg'
import Footer from '../components/Footer'

export default function About() {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const date = new Date();
  const year = date.getFullYear() - 2014;
  return (

    <div>
      <Header />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} style={{
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
                Poznaj <strong>Nova</strong> bliżej.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6} style={{
            minHeight: isMobile ? "35vh" : "45vh"
          }}>
            <div style={{
              backgroundImage: `url(${about})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: "100%",
              widht: "100%"

            }}>
            </div>
          </Grid>
        </Grid>
        <div style={{
          margin: "8vh 8vw"
        }}>
          <Typography variant="body1" style={{
            textAlign: "justify",
            textJustify: "inter-word",
            fontSize: "1.5em"
          }}>
            Taxi <strong>Nova</strong> Legnica to firma obecnie prowadzona przez doświadczonych kierowców, 
            którą Grzegorz, Daniel, Dominik i Piotr postanowili reaktywować po {year} latach. <br /><br />
            Grupę Taxi <strong>Nova</strong> Legnica będą tworzyć kierowcy, którzy potrafili dostosować się
            do obecnie panujących warunków na rynku Taxi.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  )
}
