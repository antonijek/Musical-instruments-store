import React from "react";
import { CardActionArea, Typography, CardContent, Card } from "@mui/material";

const DeliveryCard = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        width: "90%",
        textAlign: "center",
        mt: 3,
        height: { xs: "60vw", sm: "20vw" },
      }}
    >
      <CardActionArea color="secondary">
        {icon}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DeliveryCard;
