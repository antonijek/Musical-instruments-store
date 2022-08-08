import {React, useState, useEffect } from 'react'
import ArticleCard from "./ArticleCard";
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { getCategories } from "../api/index";
import OneInstrument from "./OneInstrument";

const Article = () => {

  const [bestRated, setBestRated] = useState([]);
  const [openMOdal, setOpenMOdal] = useState(false);
  const [id, setId] = useState();
  const handleOpen = () => setOpenMOdal(true);
  const handleClose = () => setOpenMOdal(false);

  const handleModal = (e) => {
    handleOpen();
    setId(e);
  };

  const getCategoriesApi = async () => {
    try {
        const res = await getCategories();
        const bestRatedArr = res.data.bestRatedInstruments;
        setBestRated(bestRatedArr);
    } catch(e) {
        console.log(e);
    }
}

useEffect(() => {
  getCategoriesApi();
}, []);

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
      {bestRated.map((elem) => (
        <Grid key={elem.id} onClick={(e) => handleModal(elem.id)} item xs={12} sm={6} md={3} sx={gridItemsStyle}>
          <ArticleCard elem={elem}/>
        </Grid>
      ))}
      </Grid>
      {openMOdal && <OneInstrument handleClose={handleClose} id={id} />}
    </>
  )
}

export default Article