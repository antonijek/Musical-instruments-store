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
    paddingBottom:'3vh',
  }

  return (
    <>
      <Box>
        <Typography variant='h3' sx={{textAlign:'center', paddingTop:'5%', color:'text.secondary'}}>TOP RATED</Typography>
      </Box>

      <Grid container justify='center' sx={gridContainerStyle}>
        <Grid items xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard />
        </Grid>
      </Grid>
    </>
  )
}

export default Article