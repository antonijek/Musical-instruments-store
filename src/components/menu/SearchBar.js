import { React, useState } from 'react'
import { Typography, Box, Stack, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {
    
  const [query, setQuery] = useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>

          <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:{xs:'80%', sm:'30%'}}}
          >
            {/* <form onSubmit={ handleSubmit } sx={{widt:'100%'}}> */}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                value={query}
                onChange={(e)=>setQuery(e.target.value )}
              />
              <IconButton 
                type="submit"
                sx={{ p: '10px' }} 
                aria-label="search"
              >

                <SearchIcon />
              </IconButton>
            {/* </form> */}
          </Paper>


    </>
  )
}

export default SearchBar