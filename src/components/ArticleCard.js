import { React, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { Rating } from "@mui/material";

function ArticleCard({elem}) {

  return (
    <>

        <Card sx={{ maxWidth:{xs:'80%', sm:'100%'}, margin:'0 auto'}}> 
          <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={elem.photo}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {(elem.name).length <= 10 ? elem.description : `${(elem.name).slice(0, 17)}...`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {(elem.description).length <= 25 ? elem.description : `${(elem.description).slice(0, 90)}...`}
            </Typography>
          </CardContent>
          <CardActions sx={{display:'flex', justifyContent: 'space-between'}}>
            <Rating
              readOnly 
              name="simple-controlled"
              value={elem.rate}
              size="medium"
              sx={{marginRight:'15%'}}
            />
            <Typography sx={{color:'primary.main', fontSize:'1.2em'}}><b>{elem.price}&euro;</b></Typography>
          </CardActions>
          </CardActionArea>
        </Card>

    </>
  )
}

export default ArticleCard