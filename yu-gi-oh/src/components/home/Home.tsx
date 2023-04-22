import { Paper, Button, Grid, Typography, BottomNavigationAction, BottomNavigation, ClickAwayListener, MenuList, MenuItem, Menu } from "@material-ui/core";
import './Home.css'
import Box from '@mui/material/Box';
import NavBar from "../estaticos/navBar/NavBar";
import logo from '/home/orangebox/pasta/Dev_2023/yu-gi-oh/src/asserts/yugi_home.png'
import slifer from '/home/orangebox/pasta/Dev_2023/yu-gi-oh/src/asserts/slifer.png'
import obelisco from '/home/orangebox/pasta/Dev_2023/yu-gi-oh/src/asserts/obelisco.jpg'
import ra from '/home/orangebox/pasta/Dev_2023/yu-gi-oh/src/asserts/ra.jpg'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={12} className='home'>
                    <NavBar />
                </Grid>

                <Grid alignItems="center" item xs={12} className="mainGrid">
                    <Box paddingX={70}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá,Bem vindo(a) ao site!</Typography>
                        <img src={logo} title="home" width={600} height={360} style={{ verticalAlign: "center" }}></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center" alignItems="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src={obelisco} title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src={ra} title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                <Grid direction="row" item xs={4} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src={slifer} title="home" width={300} height={360} ></img>
                    </Box>
                </Grid>

                

                {/* <Grid direction="row" item xs={12} justifyContent="center">
                    <Box paddingX={20} marginTop={10}>
                        <img src={slifer} title="home" width={300} height={360} ></img>
                    </Box>
                </Grid> */}
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