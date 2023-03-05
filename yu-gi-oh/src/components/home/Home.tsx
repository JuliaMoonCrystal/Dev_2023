import { Paper, Button, Grid, Typography, BottomNavigationAction, BottomNavigation, ClickAwayListener, MenuList, MenuItem, Menu } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import * as React from 'react';
import './Home.css'
import Box from '@mui/material/Box';
import NavBar from "../estaticos/navBar/NavBar";

function Home() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={12} className='home'>
                   <NavBar/>
                </Grid>

                <Grid alignItems="center" item xs={12} className="mainGrid">
                    <Box paddingX={0} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá,Bem vindo(a) ao site!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>imagem</Typography>
                    </Box>
                    {/* <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box> */}
                </Grid>
                {/* <Grid item xs={4} alignItems="center">
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid item xs={4} alignItems="center">
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid item xs={4} >
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid> */}
                <Grid xs={12} className='postagem'>
                    {/* <TabPostagem /> */}
                </Grid>
            </Grid>
        </div >
    );

}

export default Home