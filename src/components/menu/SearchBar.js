import { React, useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = ({setSearchedString}) => {
    
  const [query, setQuery] = useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedString(query);
  }



  return (

    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:{xs:'90%', sm:'36%'}, padding:'5px'}}>
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
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
    </Paper>

  )
}

export default SearchBar