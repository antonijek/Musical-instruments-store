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
import CircularProgress from '@mui/material/CircularProgress';

const Menu = ({categoryId, setCategoryId}) => {

  const [instruments, setInstruments] = useState([]);
  const [searchedString, setSearchedString] = useState('');
  const [loading, setLoading] = useState(false);

  const getInstrumentsApi = async () => {
    setLoading(true);
    try {
      const res = await getInstruments();
      setInstruments(res.data.data);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstrumentsApi();
  }, []);


  const getCategoryApi = async () => {
    setLoading(true);
    try {
      const res = await getCategory(categoryId);
      setInstruments(res.data.data[0].has_many_instruments);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoryApi();
  }, [categoryId])


  const getSearchedApi = async () => {
    setLoading(true);
    try {
      const res = await getSearchedInstrument(searchedString);
      setInstruments(res.data.data);
      setLoading(false);
    } catch(e) {
      console.log(e);
      setLoading(false);
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
        <Box sx={{margin:'5%'}}>
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

      {
        loading ? (
          <CircularProgress sx={{ marginLeft:'32%', marginTop:'15%', position:'absolute'}} />
        ) : null
      }

      
      {
        instruments.length ? (
          <Feed instruments={instruments} />
        ) : (
          <Typography sx={noInstrumentTextStyle}>No instruments</Typography>
        )
      }

      


      
    </>
  );
};

export default Menu;
