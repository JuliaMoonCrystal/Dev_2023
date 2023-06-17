import { Paper, Button, Grid, Typography, BottomNavigationAction, BottomNavigation, ClickAwayListener, MenuList, MenuItem, Menu } from "@material-ui/core";
import './Home.css'
import Box from '@mui/material/Box';
import NavBar from "../estaticos/navBar/NavBar";
import logo from './src/asserts/logo_site.jpg';
import slifer from './src/asserts/slifer.png';
import obelisco from './src/asserts/obelisco.jpg';
import ra from './src/asserts/ra.jpg';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={12} className='home'>
                    <NavBar />
                </Grid>

                <Grid alignItems="center" item xs={12} className="mainGrid">
                    <Box paddingX={80}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá,Bem vindo(a) ao site!</Typography>
                        <img src="https://github.com/JuliaMoonCrystal/Dev_2023/blob/main/yu-gi-oh/src/asserts/landPage_yugi.jpg?raw=true" title="home" width={600} height={360} style={{ verticalAlign: "center" }}></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center" alignItems="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src="https://github.com/JuliaMoonCrystal/Dev_2023/blob/main/yu-gi-oh/src/asserts/slifer.jpeg?raw=true" title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src="https://github.com/JuliaMoonCrystal/Dev_2023/blob/main/yu-gi-oh/src/asserts/obelisco.jpg?raw=true" title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src="https://github.com/JuliaMoonCrystal/Dev_2023/blob/main/yu-gi-oh/src/asserts/ra.jpg?raw=true" title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                

                <Grid direction="row" item xs={12} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src="https://i.pinimg.com/550x/1b/c0/15/1bc015a738fa3ba7eeae590aca72db28.jpg" title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>
                <Grid item xs={4} alignItems="center">
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid item xs={4} alignItems="center">
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid item xs={4} >
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagem'>
                    {/* <TabPostagem /> */}
                </Grid>
            </Grid>
        </div >
    );

}

export default Home