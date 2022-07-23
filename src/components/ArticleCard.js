import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

function ArticleCard({instrument}) {


  return (
     <Card sx={{ maxWidth: '100%', margin:'2%'}}> 
      <CardActionArea>
      <CardMedia
        component="img"
        height="100%"
        image="https://europe.yamaha.com/en/files/lineupbg03_202202_b79a9925d0da63c985485493b11b553b.jpg"
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Instrument name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Button size="big">Buy</Button>
        <Typography>5.0</Typography>
      </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard