import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button } from '@mui/material';
import { CardActionArea } from '@mui/material';

function CategoriesCard({category, categoryId, setCategoryId}) {

  const setCategId = () => {
    setCategoryId(category.id);
    console.log(category.id);
    console.log('categoryId: ' + categoryId)
  }

  return (
    <>
      <Button onClick={setCategId}>
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
                { category.name }
            </Typography>

            </CardContent>
            </CardActionArea>
        </Card>
      </Button>
    </>
  )
}

export default CategoriesCard