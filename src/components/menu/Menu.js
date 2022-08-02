import { React, useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import Category from './Category';
import Feed from './Feed';
import { getInstruments } from "../../api/index";
import { getCategory } from "../../api/index";
import { getSearchedInstrument } from "../../api/index";
import axios from "axios";
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

const Menu = ({categoryId, setCategoryId}) => {

  const [instruments, setInstruments] = useState([]);
  const [searchedString, setSearchedString] = useState('');

  const getInstrumentsApi = async () => {
    try {
      const res = await getInstruments();
      setInstruments(res.data.data)
    } catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInstrumentsApi();
  }, []);


  const getCategoryApi = async () => {
    try {
      const res = await getCategory(categoryId);
      setInstruments(res.data.data[0].has_many_instruments);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCategoryApi();
  }, [categoryId])


  const getSearchedApi = async () => {
    try {
      const res = await getSearchedInstrument(searchedString);
      setInstruments(res.data.data)
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSearchedApi();
  }, [searchedString]);
  

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
          <SearchBar setSearchedString={setSearchedString} />
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
