import { Box, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { Button, Card } from "react-bootstrap";
import NavBar from "../estaticos/navBar/NavBar";

const cardsData = [
    { title: 'Card 1', content: 'Conteúdo do card 1' },
    { title: 'Card 2', content: 'Conteúdo do card 2' },
    { title: 'Card 3', content: 'Conteúdo do card 3' },
    { title: 'Card 4', content: 'Conteúdo do card 4' },
    { title: 'Card 5', content: 'Conteúdo do card 5' },
    { title: 'Card 6', content: 'Conteúdo do card 6' },
    { title: 'Card 7', content: 'Conteúdo do card 7' },
    { title: 'Card 8', content: 'Conteúdo do card 8' },
];

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px' }}
    >
        •
    </Box>
);

function ListCards() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
            <Grid alignItems="center" item xs={12} className='home'>
                <NavBar />
            </Grid>
            <Grid item xs={12}  className='home'>
                <Grid container spacing={2}>
                    {cardsData.map((card) => (
                        <Grid item xs={12} sm={6} md={3} key={card.title}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListCards