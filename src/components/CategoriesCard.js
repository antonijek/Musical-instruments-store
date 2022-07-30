import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button, Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';

function CategoriesCard({category, categoryId, setCategoryId}) {

  const setIdHandler = () => {
    setCategoryId(category.id);

  }

  return (

    <Card sx={{ maxWidth:{xs:'90%', sm:'100%'}, margin:'0 auto', borderRadius:'0'}}>
      <Grid onClick={setIdHandler}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="260"
          image={category.photo}
          alt="img"
        />
          <CardContent sx={{textAlign:'center'}}>
            <Typography variant="h5" component="div">
                { category.name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>
    </Card>

  )
}

export default CategoriesCard