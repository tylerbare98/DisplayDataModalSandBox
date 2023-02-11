import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core/";

//MUI useStyles Hook
const useStyles = makeStyles({
  tableContainer: {
    margin: "auto"
  },
  table: {
    minWidth: 650,
    width: "100%",
    margin: "auto"
  },
  tableRow: {
    backgroundColor: "#ffffff",
    "&:nth-of-type(odd)": {
      backgroundColor: "#f2f2f2"
    },
    "&:hover": {
      backgroundColor: "rgb(199, 169, 255)",
      color: "white",
      cursor: "pointer"
    }
  },
  tableHeader: {
    backgroundColor: "rgb(143, 85, 250)",
    color: "rgb(143, 85, 250)",
    "&:hover": {
      backgroundColor: "rgb(143, 85, 250)",
      color: "white"
    }
  }
});

function BasicTable(props) {
  const classes = useStyles();

  //row clicked handler
  function rowClicked(row) {
    props.openModal(row);
  }

  //basic formatted table
  return (
    <>
      <h2>
        <span>PILYTIX Scored Opportunities</span>
      </h2>
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
        style={{ width: "90%" }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell align="left">Opp Name</TableCell>
              <TableCell align="left">Opp Stage</TableCell>
              <TableCell align="right">Rep Probability</TableCell>
              <TableCell align="right">PX Probability</TableCell>
              <TableCell align="left">PX Tier</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Sales Rep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                onClick={(event) => rowClicked(row)}
                key={row.oppId}
                className={classes.tableRow}
              >
                <TableCell component="th" scope="row">
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BasicTable;
