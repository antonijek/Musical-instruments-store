import React from 'react'
import SearchBar from './SearchBar';
import ArticleCard from "../ArticleCard";
import { Typography, Box, Stack, Grid, CategoriesCard } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const Menu = () => {

  const GridContainerStyle = {
    marginTop:'5vh'

}
 
  return (
    <>
     <SearchBar />
      
     <Grid container justify='center' sx={GridContainerStyle}>
        <Grid items xs={12} sm={6}>
            <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={6}>
            <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={6}>
            <ArticleCard />
        </Grid>
        <Grid items xs={12} sm={6} md={6}>
            <ArticleCard />
        </Grid>
      </Grid>

      <Stack sx={{p:'5%'}} justifyContent="center" alignItems="center">
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  )
}

export default Menu