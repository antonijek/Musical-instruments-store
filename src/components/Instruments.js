import React, { useState } from "react";
import { Button } from "@mui/material";
import OneInstrument from "./OneInstrument";

const Instruments = () => {
  const [openMOdal, setOpenMOdal] = useState(false);

  const handleOpen = () => setOpenMOdal(true);
  const handleClose = () => setOpenMOdal(false);
  return (
    <div>
      <Button onClick={handleOpen}>Guitar</Button>
      {openMOdal && <OneInstrument handleClose={handleClose} />}
    </div>
  );
};

export default Instruments;
