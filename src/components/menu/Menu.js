import { React, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Feed from "./Feed";
import { getInstruments } from "../../api/index";
import { getCategory } from "../../api/index";
import { getSearchedInstrument } from "../../api/index";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

const Menu = ({ categoryId, setCategoryId }) => {
  const [instruments, setInstruments] = useState([]);
  const [searchedString, setSearchedString] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageInfo, setPageInfo] = useState(0);

  const getInstrumentsApi = async () => {
    setLoading(true);
    try {
      const res = await getInstruments(currentPage);
      setInstruments(res.data.data.data);
      setPageInfo(res.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstrumentsApi();
  }, [currentPage]);

  const getCategoryApi = async () => {
    setLoading(true);
    try {
      const res = await getCategory(categoryId, currentPage);
      setInstruments(res.data.data[0].hasManyInstruments.data);
      setPageInfo(res.data.data[0].hasManyInstruments);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryApi();
  }, [categoryId, currentPage]);

  const getSearchedApi = async () => {
    setLoading(true);
    try {
      const res = await getSearchedInstrument(searchedString);
      setInstruments(res.data.data.data);
      setPageInfo(res.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchedApi();
  }, [searchedString]);

  const handlePage = (event, page) => {
    setCurrentPage(page);
    console.log(page);
    window.scroll(0, 0);
  };

  const headerStyle = {
    width: "100%",
    height: "20vh",
    marginTop: "5vh",
  };

  const noInstrumentTextStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "10vw",
    paddingBottom: "15vw",
    fontSize: "1.5em",
  };

  return (
    <>
      <Box sx={{ margin: "5%" }}>
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <SearchBar setSearchedString={setSearchedString} />
          <Category categoryId={categoryId} setCategoryId={setCategoryId} />
        </Stack>
      </Box>

      {loading ? (
        <CircularProgress
          sx={{ marginLeft: "32%", marginTop: "15%", position: "absolute" }}
        />
      ) : null}

      {instruments !== 0 ? (
        <Feed instruments={instruments} />
      ) : (
        <Typography sx={noInstrumentTextStyle}>No instruments</Typography>
      )}

      <Stack sx={{ p: "5%" }} justifyContent="center" alignItems="center">
        <Pagination
          count={pageInfo.last_page}
          onChange={handlePage}
          color="primary"
          size="large"
        />
      </Stack>
    </>
  );
};

export default Menu;
