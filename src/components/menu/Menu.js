import { React, useContext, useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import Category from './Category';
import Feed from './Feed';
import { getInstruments } from "../../api/index";
import { getCategory } from "../../api/index";
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import axios from "axios";

const Menu = ({categoryId, setCategoryId}) => {

  const [instruments, setInstruments] = useState([]);
  // const [categoryId, setCategoryId] = useState(0);

  const getInstrumentsApi = async () => {
    try {
      const res = await getInstruments();
      setInstruments(res.data.data)
    } catch(e) {
      console.log(e);
    }
  };

  console.log(instruments);

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

  return (
    <>
      <Box sx={headerStyle}>
        <Stack
          spacing={2}
          direction="row"
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
        <Typography>No instruments</Typography>
      )}
    </>
  );
};

export default Menu;
