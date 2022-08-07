import { React, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { getStatistic } from "../api";
import { CircularProgress, Typography, Box, Button } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

const Statistic = () => {
  const [chart, setChart] = useState(data);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  let token = localStorage.getItem("token");

  const getStatisticData = async () => {
    try {
      setLoading(true);
      const res = await getStatistic(token);
      setResponse(res);
      setLoading(false);
      setChart({
        ...chart,
        labels: res.data.data.items_sold_by_category.map((item) => item.name),
        datasets: [
          {
            label: "# of Votes",
            data: res.data.data.items_sold_by_category.map(
              (item) => item.total
            ),
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
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleStatisticbyCategory = () => {
    setChart({
      ...chart,
      labels: response.data.data.items_sold_by_category.map(
        (item) => item.name
      ),
      datasets: [
        {
          label: "# of Votes",
          data: response.data.data.items_sold_by_category.map(
            (item) => item.total
          ),
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
    });
  };

  const handleStatisticbyInstrument = () => {
    setChart({
      ...chart,
      labels: response.data.data.items_sold.map((item) => item.name),
      datasets: [
        {
          label: "# of Votes",
          data: response.data.data.items_sold.map((item) => item.total),
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
    });
  };

  useEffect(() => {
    getStatisticData();
  }, []);
  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ width: "50vw" }}>
          <Typography
            variant="h4"
            style={{ marginTop: "2%", textAlign: "center", color: "#1565c0" }}
          >
            Statistics
          </Typography>
          {loading ? (
            <CircularProgress sx={{ display: "flex", mx: "auto" }} />
          ) : null}
          <Pie data={chart} />;
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={handleStatisticbyCategory} variant="contained">
          By Category
        </Button>
        <Button onClick={handleStatisticbyInstrument} variant="contained">
          By Instrument
        </Button>
      </Box>
    </Box>
  );
};
export default Statistic;
