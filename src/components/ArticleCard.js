import { React } from 'react'
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
     <Card sx={{ maxWidth:{xs:'80%', sm:'100%'}, margin:'0 auto'}}> 
      <CardActionArea>
      <CardMedia
        component="img"
        height="240"
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
      <CardActions sx={{display:'flex', justifyContent: 'space-around'}}>
        <Typography> Rate: 5.0 </Typography>
        <Typography> Price: 250 </Typography>
      </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard