import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import "./CustomCard.css"

const CustomCard = ({ title, numberOfCases, lastUpdate, content, customClass }) => (
  <Grid item component={Card} xs={12} md={3} className={customClass}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>{title}</Typography>
        <Typography variant="5h">
          <CountUp  start={0} end={numberOfCases} duration={2.5} separator=","/>
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Grid>
)

export default CustomCard;