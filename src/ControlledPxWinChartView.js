import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer
} from "@material-ui/core/";
import "./ChartViews.css";

//MUI useStyles Hook
const useStyles = makeStyles({
  root: {
    width: "90%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  tableCell: {
    color: "rgb(143, 85, 250)"
  }
});

const ControlledPxWinChartView = (props) => {
  const classes = useStyles();

  //determine if we are to show the increasing or decreasing win data,
  //This allows the component to be reused
  const data =
    props.type === "increasing"
      ? props.currentRow.pilytixFactorsDecreasingWin
      : props.currentRow.pilytixFactorsIncreasingWin;

  //display basic neat table
  return (
    <>
      <TableContainer style={{ maxHeight: 425 }}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Name</TableCell>
              <TableCell className={classes.tableCell}>Message</TableCell>
              <TableCell className={classes.tableCell}>Weight Value</TableCell>
              <TableCell className={classes.tableCell}>
                Weight Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{item.weight.value}</TableCell>
                    <TableCell>{item.weight.description}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      {!data && <div className="noDataDisplay">No Data to Display</div>}
    </>
  );
};

export default ControlledPxWinChartView;
