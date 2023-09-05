import React from "react";
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AttachMoneyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to='/' className="header__link">
                                Fake Shop
                            </Link>
                        </Typography>


                        <AttachMoneyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Fake Shop
                        </Typography>




                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Footer;