import { React, useState } from "react";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Category({ categoryId, setCategoryId }) {
  const [instrumentTitle, setInstrumentTitle] = useState("");

  const handleChange = (event) => {
    setInstrumentTitle(event.target.value);
    setCategoryId(instruments.indexOf(event.target.value) + 1);
  };

  const instruments = [
    "Drums",
    "Electronic instruments",
    "Equipment",
    "Guitars",
    "Pianos",
    "Strings",
    "Wind",
  ];

  return (
    
    <Box sx={{ minWidth: 80 }}>
      <FormControl sx={{ width:{xs:'32vh', sm:"40vh"}}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={instrumentTitle}
          label="Instrument"
          onChange={handleChange}
        >
          {instruments.map((instrument) => (
            <MenuItem value={instrument} defaultValue="" key={instrument}>
              {instrument}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Category;
