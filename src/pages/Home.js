import { Typography, Grid, Button } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import background from '../images/background.jpg'
import downloadAndroid from '../images/downloadAndroid.png'
import smartphone from '../images/smartphoneFull.png';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Home() {
    
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
                        minHeight: isMobile ? "55vh" : "70vh"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            widht: "100%",
                            alignItem: "center",
                            justifyContent: "center"
                        }}>
                            <Typography variant={isMobile ? "h3" : "h3"} style={{
                                margin: "auto 3vw",
                                fontWeight: "bold"
                            }}>
                                Nowa jakość podróżowania taksówką.
                                <div style={{
                                    marginTop: "5vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justyfyContent: "center",
                                    alignItem: "center",
                                    width: "100%"
                                }}>
                                    <Typography variant="h6" align="center">
                                        Pobierz aplikację <strong>Nova</strong>.
                                    </Typography>
                                    <div style={{
                                        margin: "0 auto"
                                    }}>
                                        { navigator.userAgent.indexOf("Android") !== -1 ? 
                                        <Button href="/">
                                            <img widht="85%" height="85%" src={downloadAndroid} alt="Pobierz aplikację Android" />
                                        </Button> 
                                            : 
                                        navigator.userAgent.indexOf("like Mac") !== -1 ?
                                        <Button href="/">
                                            <img  widht="85%" height="85%" src={downloadAndroid} alt="Pobierz aplikację iOS" />
                                        </Button> 
                                            : 
                                            <>
                                        <Button href="/">
                                            <img widht="85%" height="85%" src={downloadAndroid} alt="Pobierz aplikację Android" />
                                        </Button> 
                                        <Button href="/">
                                            <img  widht="85%" height="85%" src={downloadAndroid} alt="Pobierz aplikację iOS" />
                                        </Button> 
                                            </>
                                        }
                                    </div>
                                </div>
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} style={{
                        minHeight: isMobile ? "45vh" : "70vh"
                    }}>
                        <div style={{
                            backgroundImage: `url(${background})`,
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
                    margin: "8vh 2vw"
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <LocalTaxiIcon style={{
                                    fontSize: "5rem",
                                    color: "#ec0000"
                                }} />
                                <Typography variant="h5" align="center">
                                    <strong>Zamów przez aplikację</strong>
                                </Typography>
                                <Typography variant="body2" align="center">
                                    Gwarantujemy natychmiastowy dojazd do klienta
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AccountBalanceWalletIcon style={{
                                    fontSize: "5rem",
                                    color: "#ec0000"
                                }} />
                                <Typography variant="h5" align="center">
                                    <strong>Najniższe ceny</strong>
                                </Typography>
                                <Typography variant="body2" align="center">
                                    Najlepsze ceny w mieście za przejazd taksówką
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <PhoneAndroidIcon style={{
                                    fontSize: "5rem",
                                    color: "#ec0000"
                                }} />
                                <Typography variant="h5" align="center">
                                    <strong>Prosta w obsłudze</strong>
                                </Typography>
                                <Typography variant="body2" align="center">
                                    Najbardziej intuicyjna aplikacja do zamawiania
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                
                <Grid container spacing={0} style={{
                    backgroundColor: "#ec0000",
                    padding: "1rem"
                }}>
                        <Grid item xs={12} md={6}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1rem"
                            }}>
                            <img src={smartphone} alt="Smartphone" />
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                padding: "1rem",
                                height: "100%"
                            }}>
                            <Typography variant="h4" color="white">
                                <strong>Zamów przejazd w naszej aplikacji!</strong>
                            </Typography>
                            <Typography variant="body1" color="white" style={{
                                marginTop: "2rem"
                            }}>
                                Wybierz miejsce odbioru, następnie miejsce docelowe i ciesz się przejazdem z naszym kierowcą.
                            </Typography>
                            </div>

                        </Grid>

                    </Grid>
            </div>
            <Footer />
        </div>
    )
}
