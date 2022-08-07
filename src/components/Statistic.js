import { React, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { getStatistic } from "../api";
import { CircularProgress, Typography, Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Drums",
    "Electronic instruments",
    "Equipment",
    "Guitars",
    "Pianos",
    "Strings",
    "Wind",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [14, 14, 14, 14, 14, 14, 14],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(155, 119, 164, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 119, 164, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Statistic = () => {
  const [chart, setChart] = useState(data);
  const [loading, setLoading] = useState(false);

  let token = localStorage.getItem("token");

  const handleStatistic = async () => {
    try {
      setLoading(true);
      const res = await getStatistic(token);
      console.log(res);
      setChart({ ...data, data: res.data });
      setLoading(true);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <Box style={{ width: "50vw" }}>
        <Typography
          variant="h4"
          style={{ marginTop: "2%", textAlign: "center", color: "#1565c0" }}
        >
          Statistics by category
        </Typography>
        {loading ? (
          <CircularProgress sx={{ display: "flex", mx: "auto" }} />
        ) : null}
        <Pie data={chart} />;
      </Box>
    </Box>
  );
};
export default Statistic;
