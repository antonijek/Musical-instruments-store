import React from 'react'
import CategoriesCard from './CategoriesCard';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
function Categories() {

    const StackStyle = {
        marginTop:'5%',
    }

    const StackTypographyStyle = {
        paddingTop:'5%',
        color:'text.secondary'
    }

    const StackButtonStyle = {
        float:{xs:'center', sm:'right'},
        display:{xs:'block'},
        marginTop:'3vh',
        borderRadius: 0,
        padding: '10px'
    }

    const GridContainerStyle = {
        marginTop:'5vh'
    }

  return (
    <>
        <Stack direction={{ xs:'column', sm:'row' }} justifyContent='space-between' alignItems={{xs:'center'}} sx={StackStyle}>
            <Box>
                <Typography variant='h3' sx={StackTypographyStyle}>CATEGORIES</Typography>
            </Box>
            <Box>
                <Button variant='contained' sx={StackButtonStyle}>ALL CATEGORIES</Button>
            </Box>  
        </Stack>
        <Grid container justify='center' sx={GridContainerStyle}>
            <Grid items xs={12} sm={6} md={6}>
                <CategoriesCard />
            </Grid>
            <Grid items xs={12} sm={6} md={6}>
                <CategoriesCard />
            </Grid>
            <Grid items xs={12} sm={6} md={6}>
                <CategoriesCard />
            </Grid>
            <Grid items xs={12} sm={6} md={6}>
                <CategoriesCard />
            </Grid>
        </Grid>
    </>
  )
}

export default Categories