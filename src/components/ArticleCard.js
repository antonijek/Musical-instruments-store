import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

function ArticleCard() {


  return (
     <Card sx={{ maxWidth: '95%'}}> 
    <CardMedia
      component="img"
      height="100%"
      image="https://europe.yamaha.com/en/files/lineupbg03_202202_b79a9925d0da63c985485493b11b553b.jpg"
      alt="img"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Instrument
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <Button size="big">Buy</Button>
      <Typography>5.0</Typography>
    </CardActions>
  </Card>
  )
}

export default ArticleCard