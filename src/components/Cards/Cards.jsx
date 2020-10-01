import React from "react";
import { Grid } from "@material-ui/core";
import CustomCard from './CustomCard';
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..."
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CustomCard title='Infected' numberOfCases={confirmed.value} lastUpdate={lastUpdate} content="Number of active cases of COVID-19" customClass="infected" />
        <CustomCard title='Recovered' numberOfCases={recovered.value} lastUpdate={lastUpdate} content="Number of recoveries of COVID-19" customClass="recovered" />
        <CustomCard title='Deaths' numberOfCases={deaths.value} lastUpdate={lastUpdate} content="Number of deaths of COVID-19" customClass="deaths" />
      </Grid>
    </div> 
  )
}

export default Cards;