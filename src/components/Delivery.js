import React from "react";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import DeliveryCard from "./DeliveryCard";
import { Stack } from "@mui/material";

const Delivery = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "center" }}
      sx={{ my: 3 }}
    >
      <DeliveryCard
        icon={
          <DeliveryDiningOutlinedIcon
            sx={{ fontSize: 100, color: "text.secondary" }}
          />
        }
        title="Small shipments"
        description="Delivery within 24 hours"
      />
      <DeliveryCard
        icon={
          <LocalShippingOutlinedIcon
            sx={{ fontSize: 100, color: "text.secondary" }}
          />
        }
        title="Big shipments"
        description="Delivery within 48 hours"
      />
      <DeliveryCard
        icon={
          <WorkspacePremiumOutlinedIcon
            sx={{ fontSize: 100, color: "text.secondary" }}
          />
        }
        title="GUARANTEE"
        description="24 months on all products!"
      />
      <DeliveryCard
        icon={
          <AddCardOutlinedIcon
            sx={{ fontSize: 100, color: "text.secondary" }}
          />
        }
        title="Security"
        description="Our security system allows you to shop safely"
      />
    </Stack>
  );
};

export default Delivery;
