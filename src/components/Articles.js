import React from 'react'
import ArticleCard from "./ArticleCard";
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';

const Article = () => {

  const gridContainerStyle = {
    padding:'0px',
    marginTop:'10px',
  }

  const gridItemsStyle = {

  }

  return (
    <>
      <Box>
        <Typography variant='h3' sx={{ textAlign:'center', paddingTop:{xs:'15%',md:'7%'}, fontSize:{xs:'2.3em', sm:'3em'}, color:'text.secondary'}}>TOP RATED</Typography>
      </Box>

      <Grid container spacing={2} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
      </Grid>
    </>
  )
}

export default Article