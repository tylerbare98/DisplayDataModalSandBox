import "./ChartViews.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core/";

//useStyles MUI Hook
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "white",
    color: "rgb(143, 85, 250)"
  },
  title: {
    fontSize: 14
  }
});

//This just display the basic data that was already in the table row
const BasicInfoView = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Opportunity ID: {props.currentRow.oppId}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Opportunity Name: {props.currentRow.oppName}
        </Typography>
        <Typography variant="body2" component="p">
          Sales Representative: {props.currentRow.salesRepName}
        </Typography>
        <Typography variant="body2" component="p">
          Amount: ${props.currentRow.amount}
        </Typography>
        <Typography variant="body2" component="p">
          Product: {props.currentRow.product}
        </Typography>
        <Typography variant="body2" component="p">
          Stage: {props.currentRow.stage}
        </Typography>
        <Typography variant="body2" component="p">
          Sales Representative Probability: {props.currentRow.repProbability}
        </Typography>
        <Typography variant="body2" component="p">
          Pilytix Tier: {props.currentRow.pilytixTier}
        </Typography>
        <Typography variant="body2" component="p">
          Pilytix Probability: {props.currentRow.pilytixProbability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicInfoView;
