import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";



function InstrumentCard({ instrument }) {
  return (
    <Card sx={{  maxWidth:{xs:'90%', sm:'90%'}, margin:'0 auto'}}> 
      <CardMedia
        component="img"
        height='350'
        image={instrument.photo}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { instrument.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { instrument.description }
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent: 'space-between', padding:'3%'}}>
        <Rating
          readOnly 
          name="simple-controlled"
          value={instrument.rate}
          size="medium"
          sx={{marginRight:'15%'}}
        />
        <Typography sx={{color:'primary.main', fontSize:'1.2em'}}><b>{instrument.price}&euro;</b></Typography>
      </CardActions>
    </Card>
  )
}

export default InstrumentCard;
