import React from "react";
import {
    AppBar,
    Avatar,
    Box, Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from "react-router-dom";
import './header.scss';
import {useAuth} from "../../../hook/use-auth";
import {removeUser} from "../../../store/modules/shop/reducers/userSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";


const setActive = ({isActive}: any) => isActive ? 'header__active header__link' : 'header__link';
const setActiveSmall = ({isActive}: any) => isActive ? 'header__active header__links' : 'header__links';

const Header: React.FC = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const {isAuth} = useAuth()
    const dispatch = useDispatch<AppDispatch>()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className="header">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AttachMoneyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
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

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                <MenuItem sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}
                                          onClick={handleCloseNavMenu}>

                                    <NavLink to="/" className={setActiveSmall}>Home</NavLink>
                                    <NavLink to="shops" className={setActiveSmall}>Shop</NavLink>
                                    <NavLink to="about" className={setActiveSmall}>About</NavLink>
                                    <NavLink to="contacts" className={setActiveSmall}>Contacts</NavLink>

                                </MenuItem>
                            </Menu>
                        </Box>
                        <AttachMoneyIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
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
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                            <NavLink to="/" className={setActive}>Home</NavLink>
                            <NavLink to="shops" className={setActive}>Shop</NavLink>
                            <NavLink to="about" className={setActive}>About</NavLink>
                            <NavLink to="contacts" className={setActive}>Contacts</NavLink>

                        </Box>

                        <Link to="basket">
                            <ShoppingBasketIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 3}}/>
                        </Link>
                        {
                            isAuth
                                ?
                                <Box sx={{flexGrow: 0}}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{mt: '45px'}}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}
                                                  sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                                            <Link to="profile" className="header__links">Profile</Link>
                                            <Link to="basket" className="header__links">BASKET</Link>
                                            <Link to="account" className="header__links">Account</Link>
                                            {
                                                isAuth ? <Button onClick={() => dispatch(removeUser())}
                                                                 className="header__links" color="error">LogOut</Button>
                                                    : <Link to="login" className="header__links">LogIn</Link>
                                            }

                                        </MenuItem>
                                    </Menu>
                                </Box>
                                : <Link to="login" className="header__links">
                                    <Button variant="outlined" sx={{color: 'white', border: '1px solid white'}}>
                                        LogIn
                                    </Button>
                                  </Link>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;