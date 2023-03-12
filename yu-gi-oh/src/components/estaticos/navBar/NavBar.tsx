import { Paper, Button, Grid, Typography, ClickAwayListener, MenuList, MenuItem, Menu } from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import * as React from 'react';
import './NavBar.css'
import Box from '@mui/material/Box';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import TvIcon from '@mui/icons-material/Tv';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import logo from '/home/orangebox/pasta/Dev_2023/yu-gi-oh/src/asserts/logo_site.jpg'

function NavBar() {
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid item xs={2}>
                    <Box>
                        <BottomNavigation
                            showLabels
                            value={value}
                            className='logo'
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}>
                            <img src={logo} title="home"></img>
                        </BottomNavigation>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={10}>
                    <Box alignItems="center">
                        <BottomNavigation
                            showLabels
                            value={value}
                            className='home'
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}>
                            <BottomNavigationAction label="Lista de cartas" component={Link} to='/listCards' icon={<PaymentIcon />} color={"gold"}/>
                            <BottomNavigationAction label="Personagens" component={Link} to='/characters' icon={<PersonIcon />} />
                            <BottomNavigationAction label="Séries" component={Link} to='/series' icon={<TvIcon />} />
                            <BottomNavigationAction label="Sobre" component={Link} to='/about' icon={<InfoIcon />} />
                        </BottomNavigation>
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
}



export default NavBar
