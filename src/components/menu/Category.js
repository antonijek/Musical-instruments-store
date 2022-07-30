import { React, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCategories } from "../../api/index"

function Category({categoryId, setCategoryId}) {

  const [instrumentTitle, setInstrumentTitle] = useState('');

  const handleChange = (event) => {
    setInstrumentTitle(event.target.value);
    setCategoryId(instruments.indexOf(event.target.value) + 1);
    console.log(instruments.indexOf(event.target.value) + 1)
  };
  
  const instruments = [
    'Drums',
    'Electronic instruments',
    'Equipment',
    'Guitars',
    'Pianos',
    'Strings',
    'Wind'
  ];

  return (

    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width:'40vh',}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          
          labelId="demo-simple-select-label"
          value={instrumentTitle}
          label="Instrument"
          onChange={handleChange}
        >
          { instruments.map(instrument => (

            <MenuItem value={instrument} defaultValue="" key={instrument}>{instrument}</MenuItem>
            
          ))}
          
        </Select>
      </FormControl>
    </Box>

  )
}

export default Category