import { React, useState, useContext } from "react";
import InstrumentCard from "./InstrumentCard";
import {Stack, Grid } from "@mui/material";

import OneInstrument from "../OneInstrument";

const Feed = ({ instruments }) => {
  const [openMOdal, setOpenMOdal] = useState(false);
  const [id, setId] = useState();
  const handleOpen = () => setOpenMOdal(true);
  const handleClose = () => setOpenMOdal(false);

  const GridContainerStyle = {
    marginTop: "5vh",
  };

  const handleModal = (e) => {
    handleOpen();
    setId(e);
  };

  return (
    <>
      <Grid container spacing={5} sx={GridContainerStyle}>
      
        {(instruments).map((instrument) => (
           <Grid
            item
            onClick={(e) => handleModal(instrument.id)}
            key={instrument.id}
            xs={12}
            sm={6}
            md={6}
          >
            <InstrumentCard instrument={instrument} />  
          </Grid>
        ))}

      </Grid>
        
      {openMOdal && <OneInstrument handleClose={handleClose} id={id} />}
    </>
  );
};

export default Feed;
