import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";

function InstrumentCard({ instrument }) {
  return (
    <Card sx={{  maxWidth:{xs:'80%', sm:'90%'}, margin:'0 auto'}}> 
      <CardMedia
        component="img"
        height="350"
        image={'http://localhost:8000'+instrument.photo}
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
      <CardActions sx={{display:'flex', justifyContent: 'space-around'}}>
        <Typography>Rate: 4.7 </Typography>
        <Typography> Price: {instrument.price}</Typography>
      </CardActions>
    </Card>
  )
}

export default InstrumentCard;
