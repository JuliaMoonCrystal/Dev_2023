import { Paper, Button, Grid, Typography, BottomNavigationAction, BottomNavigation, ClickAwayListener, MenuList, MenuItem, Menu } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import * as React from 'react';
import './NavBar.css'
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import TvIcon from '@mui/icons-material/Tv';
import InfoIcon from '@mui/icons-material/Info';

function NavBar() {
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={12} className='home'>
                    <Box alignItems="center">
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}>
                            <BottomNavigationAction label="Lista de cartas" icon={<PaymentIcon />} />
                            <BottomNavigationAction label="Personagens" icon={<PersonIcon />} />
                            <BottomNavigationAction label="Series" icon={<TvIcon />} />
                            <BottomNavigationAction label="Sobre" icon={<InfoIcon />} />
                        </BottomNavigation>
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
}

export default NavBar