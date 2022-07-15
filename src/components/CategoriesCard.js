import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CategoriesCard() {
  return (
    <>
        <Card sx={{ maxWidth: '100%', margin:'5%' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="260"
                image="images/guitars.jpg"
                alt="img"
            />
            <CardContent sx={{textAlign:'center'}}>
            <Typography gutterBottom variant="h4" component="div">
                Category
            </Typography>

            </CardContent>
            </CardActionArea>
        </Card>
    </>
  )
}

export default CategoriesCard