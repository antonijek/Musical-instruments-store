import { React, useState } from 'react'
import InstrumentCard from "./InstrumentCard";
import { UserContext } from "../UserContext";
import { Typography, Box, Stack, Grid, CategoriesCard, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import OneInstrument from '../OneInstrument';

const Feed = ({instruments}) => {

    const [openMOdal, setOpenMOdal] = useState(false);
    const handleOpen = () => setOpenMOdal(true);
    const handleClose = () => setOpenMOdal(false);

    const GridContainerStyle = {
        marginTop:'5vh'
    }

    const test = (e) => {
        console.log(e);
    }

  return (
    <>
    <Grid container justify='center' sx={GridContainerStyle}>
        { instruments.map((instrument) => (
        
            <Grid item key={instrument.id} items xs={12} sm={6} md={6}>
                <Button onClick={(e) => test(e.target)}  >
                    <InstrumentCard instrument={instrument} />
                </Button>
            </Grid>
        
        ))
        }
    </Grid>

    <Stack sx={{p:'5%'}} justifyContent="center" alignItems="center">
        <Pagination count={10} color="primary" />
    </Stack>
    {openMOdal && <OneInstrument handleClose={handleClose} />}
    </>
  )
}

export default Feed