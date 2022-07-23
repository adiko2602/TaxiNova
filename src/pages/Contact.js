import { Typography, Grid } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import Header from '../components/Header'
import contact from '../images/contact.jpg'
import Footer from '../components/Footer'

export default function Contact() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
                                Napisz do <strong>Nova</strong>.
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} style={{
                        minHeight: isMobile ? "35vh" : "45vh"
                    }}>
                        <div style={{
                            backgroundImage: `url(${contact})`,
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
                    <Grid container spacing={0} style={{
                        fontSize: "1.5em"
                    }}>
                        <Grid item xs={12} md={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Reklamacje</strong>
                        </Grid>
                        <Grid item xs={12} md={6} style={{
                            padding: "1rem"
                        }}>
                            {!isMobile ?
                                <div style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    fontWeight: 900,
                                    color: "#ec0000"
                                }}>
                                    taxinovalegnica.reklamacje@gmail.com
                                </div> :
                                <div style={{
                                    fontSize: "0.65em",
                                    fontWeight: 900,
                                    color: "#ec0000"
                                }}>
                                    taxinovalegnica.reklamacje@gmail.com
                                </div>}

                        </Grid>


                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>


                        <Grid item xs={12} md={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Współpraca</strong>
                        </Grid>
                        <Grid item xs={12} md={6} style={{
                            padding: "1rem"
                        }}>
                            {!isMobile ?
                                <div style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    fontWeight: 900,
                                    color: "#ec0000"
                                }}>
                                    taxinovalegnica.wspolpraca@gmail.com
                                </div> :
                                <div style={{
                                    fontSize: "0.65em",
                                    fontWeight: 900,
                                    color: "#ec0000"
                                }}>
                                    taxinovalegnica.wspolpraca@gmail.com
                                </div>
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}
