import React, { useEffect, useState } from "react";
import axios from "axios";

import { Input, Grid } from "@material-ui/core";
import {
  StyledTitle,
  StyledSubTitle,
  StyledUniTitle,
  StyledButton,
  StyledBorder,
} from "./MainPage-styled";

import facultyLogo from "../../assets/engi.svg";
import heartLogo from "../../assets/page-1.svg";
import ribbinLogo from "../../assets/page-1-copy-2.svg";

const MainPage = () => {
  const [tcasData, setTcasData] = useState([]);

  useEffect(() => {
    const fetchTcasData = async () => {
      try {
        const { data } = await axios.get(
          "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
        );
        console.log(data);
        setTcasData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTcasData();
  }, []);

  return (
    <Grid container direction="row">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src={facultyLogo} alt="facultyLogo" />
        </Grid>
        <Grid item xs={12}>
          <StyledTitle variant="h2" gutterBottom>
            คณะวิศวกรรมศาสตร์
          </StyledTitle>
          <StyledSubTitle variant="h3"> สาขาวิศวกรรมทั่วไป</StyledSubTitle>
          <StyledUniTitle variant="h3">คณะวิศวกรรมศาสตร์</StyledUniTitle>
        </Grid>
        <Grid item xs={12}>
          <img src={heartLogo} alt="heartLogo" />
        </Grid>
      </Grid>
      <StyledBorder />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container>
          <StyledTitle variant="h2" gutterBottom>
            รอบที่เปิด
          </StyledTitle>
        </Grid>
        <Grid container direction="column" justifyContent="center">
          <Grid item xs={12}>
            <StyledTitle variant="h2" gutterBottom>
              รอบที่ 4 : Admission
            </StyledTitle>
          </Grid>
          <Grid item xs={12}>
            <StyledButton variant="outlined">Secondary</StyledButton>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item xs={12}>
            <img src={ribbinLogo} alt="ribbinLogo" />
          </Grid>
          <Grid item xs={12}>
            <p>คะแนนของคุณคือ</p>
            <p>23456</p>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p>23456</p>
            <p>คะแนนของคุณคือ</p>
          </Grid>
          <Grid item xs={12}>
            <p>23456</p>
            <p>คะแนนของคุณคือ</p>
          </Grid>
          <Grid item xs={12}>
            <p>23456</p>
            <p>คะแนนของคุณคือ</p>
          </Grid>
        </Grid>
      </Grid>
      <StyledBorder />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src={facultyLogo} alt="facultyLogo" />
        </Grid>
      </Grid>
      <StyledBorder />
    </Grid>
  );
};

export default MainPage;
