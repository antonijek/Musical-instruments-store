import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { getCategories } from "../api/index";

function Categories({ categoryId, setCategoryId }) {
  const [categories, setCategories] = useState([]);

  const getCategoriesApi = async () => {
    try {
      const res = await getCategories();
      let categoriesArr = res.data.data;
      let firstFour = categoriesArr.slice(0, 4);
      console.log(firstFour);
      setCategories(firstFour);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategoriesApi();
  }, []);

  const StackStyle = {
    marginTop: "5%",
  };
  const StackTypographyStyle = {
    paddingTop: { xs: "15%", sm: "5%" },
    color: "text.secondary",
    fontSize: { xs: "2.3em", sm: "3em" },
  };
  const StackButtonStyle = {
    float: { xs: "center", sm: "right" },
    display: { xs: "block" },
    marginTop: "3vh",
    borderRadius: 0,
    padding: "10px",
    width: { xs: "80vw", sm: "100%" },
  };
  const GridContainerStyle = {
    marginTop: { xs: "0vh", md: "3vh" },
    marginBottom: "10vh",
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center" }}
        sx={StackStyle}
      >
        <Box>
          <Typography variant="h3" sx={StackTypographyStyle}>
            {" "}
            TOP CATEGORIES
          </Typography>
        </Box>
        <Box>
          <Link to={"./shop"} style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={StackButtonStyle}>
              ALL CATEGORIES
            </Button>
          </Link>
        </Box>
      </Stack>
      <Grid container spacing={5} sx={GridContainerStyle}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={12} sm={6} md={6}>
            <Link to={"./shop"} style={{ textDecoration: "none" }}>
              <CategoriesCard
                category={category}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Categories;
