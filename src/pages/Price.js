import { Typography, Grid } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import price from '../images/price.jpg'
import Footer from '../components/Footer'

export default function Price() {
    
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
                                Cennnik <strong>Nova</strong>.
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} style={{
                        minHeight: isMobile ? "35vh" : "45vh"
                    }}>
                        <div style={{
                            backgroundImage: `url(${price})`,
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
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Opłata początkowa</strong>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>10.00 zł</div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Taryfa 1</strong>
                            <Typography variant="body2">
                                Od godziny 5:00 do godziny 22:00 w dni powszednie na terenie miasta.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            3.00 zł
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Taryfa 2</strong>
                            <Typography variant="body2">
                                Od godziny 22:00 do godziny 5:00 w dni powszednie oraz niedziele i święta na terenie miasta.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            4.50 zł
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Taryfa 3</strong>
                            <Typography variant="body2">
                                Od godziny 5:00 do godziny 22:00 w dni powszednie poza terenem miasta.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            6.00 zł
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Taryfa 4</strong>
                            <Typography variant="body2">
                                Od godziny 22:00 do godziny 5:00 w dni powszednie oraz niedziele i święta poza terenem miasta.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            7.00 zł
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Godzina postoju</strong>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            30.00 zł
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{
                            borderBottom: "1px solid black"
                        }}></Grid>

                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <strong>Usługi dodatkowe</strong>
                            <Typography variant="body2">
                                Uruchamianie samochodu, zakupy (z wniesieniem dodatkowe 5.00 zł), dowóz paliwa, odwiezienie zguby.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                fontWeight: 900,
                                color: "#ec0000"
                            }}>
                            30.00 zł
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}
