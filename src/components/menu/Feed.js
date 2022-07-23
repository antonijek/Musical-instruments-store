import React from 'react'
import InstrumentCard from "./InstrumentCard";
import { UserContext } from "../UserContext";
import { Typography, Box, Stack, Grid, CategoriesCard } from '@mui/material';
import Pagination from '@mui/material/Pagination';


const Feed = ({instruments}) => {

    const GridContainerStyle = {
        marginTop:'5vh'
      }

  return (
    <>
    <Grid container justify='center' sx={GridContainerStyle}>
        { instruments.map((instrument) => (
        
            <Grid item key={instrument.id} items xs={12} sm={6} md={6}>
                <InstrumentCard instrument={instrument} />
            </Grid>
        
        ))
        }
    </Grid>

    <Stack sx={{p:'5%'}} justifyContent="center" alignItems="center">
        <Pagination count={10} color="primary" />
    </Stack>
    </>
  )
}

export default Feed