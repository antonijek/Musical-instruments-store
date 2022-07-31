import { React, useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import Category from './Category';
import Feed from './Feed';
import { getInstruments } from "../../api/index";
import { getCategory } from "../../api/index";
import axios from "axios";
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

const Menu = ({categoryId, setCategoryId}) => {

  const [instruments, setInstruments] = useState([]);

  const getInstrumentsApi = async () => {
    try {
      const res = await getInstruments();
      setInstruments(res.data.data)
      // console.log(res);
    } catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInstrumentsApi();
  }, []);

  // const getCategoryApi = async () => {
  //   try {
  //     const res = await getCategory(categoryId);
  //     setInstruments(res.data[0].has_many_instruments);
  //     console.log(res.data[0].has_many_instruments);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }
  // getCategoryApi();

  const getCategoryApi = async () => {
    try {
      fetch(`http://localhost:8000/api/instrument-category/${categoryId}`)
      .then(data => {
        return data.json();
      })
      .then(post => {
        setInstruments(post.data[0].has_many_instruments)
        // console.log('ovaj: ' + post.data[0]);
      });
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCategoryApi();
  }, [categoryId])
  
 

  const headerStyle = {
    width: "100%",
    height: "20vh",
    marginTop: "5vh",
  };

  const noInstrumentTextStyle = {
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    paddingTop:'10vw',
    paddingBottom:'15vw',
    fontSize:'1.5em'
  }

  return (
    <>
      <Box sx={headerStyle}>
        <Stack
          spacing={2}
          direction={{xs:'column', md:'row'}}
          justifyContent="space-around"
          alignItems="center"
        >
          <SearchBar />
          <Category categoryId={categoryId} setCategoryId={setCategoryId} />
        </Stack>
      </Box>

      {instruments.length ? (
        <Feed instruments={instruments} />
      ) : (
        <Typography sx={noInstrumentTextStyle}>No instruments</Typography>
      )}

      
    </>
  );
};

export default Menu;
