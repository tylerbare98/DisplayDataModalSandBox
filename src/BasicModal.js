import { Card, Tooltip } from "@material-ui/core/";
import { useState } from "react";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleDown,
  ArrowCircleUp
} from "@mui/icons-material/";
import "./BasicModal.css";
import ProbabilityHistoryChartView from "./ProbabilityHistoryChartView";
import ControlledPxWinChartView from "./ControlledPxWinChartView";
import BasicInfoView from "./BasicInfoView";

function BasicModal(props) {
  //hooks to control state
  const [showHistoryChart, setShowHistoryChart] = useState(true);
  const [showIncreasingChart, setShowIncreasingChart] = useState(false);
  const [showDecreasingChart, setShowDecreasingChart] = useState(false);
  const [showBasicInfoView, setShowBasicInfoView] = useState(false);
  //["HistoryChart", "IncreasingChart", "DecreasingChart"]
  const [currentChart, setCurrentChart] = useState("History Chart");

  //click handlers
  const modalLeftClick = () => {
    props.modalLeftClick();
  };
  const modalRightClick = () => {
    props.modalRightClick();
  };
  const modalDownClick = (chart) => {
    switch (currentChart) {
      case "History Chart":
        setShowHistoryChart(false);
        setShowIncreasingChart(true);
        setCurrentChart("Increasing Chart");
        break;
      case "Increasing Chart":
        setShowIncreasingChart(false);
        setShowDecreasingChart(true);
        setCurrentChart("Decreasing Chart");
        break;
      case "Decreasing Chart":
        setShowDecreasingChart(false);
        setShowHistoryChart(true);
        setCurrentChart("History Chart");
        break;
      default:
    }
  };
  const modalUpClick = (chart) => {
    switch (currentChart) {
      case "History Chart":
        setShowHistoryChart(false);
        setShowDecreasingChart(true);
        setCurrentChart("Decreasing Chart");
        break;
      case "Increasing Chart":
        setShowIncreasingChart(false);
        setShowHistoryChart(true);
        setCurrentChart("History Chart");
        break;
      case "Decreasing Chart":
        setShowDecreasingChart(false);
        setShowIncreasingChart(true);
        setCurrentChart("Increasing Chart");
        break;
      default:
    }
  };
  const onHeaderClick = () => {
    setShowBasicInfoView(!showBasicInfoView);
  };

  return (
    <div className="EModal-background" onClick={props.closeModal}>
      {/*button click outside modal closes it*/}
      <div>
        <div className="EModal-container">
          {/*prevents a click inside modal from closing it*/}
          <Card onClick={(e) => e.stopPropagation()}>
            {/*Header of Modal will toggle what is displayed in the header,
                and also have arrows to change which row of data to display*/}
            <div className="EModal-header">
              <Tooltip
                title={<span style={{ fontSize: "1.5em" }}>Previous Row</span>}
                arrow
              >
                <ArrowCircleLeft onClick={modalLeftClick} className="arrows" />
              </Tooltip>
              <Tooltip
                title={
                  <span style={{ fontSize: "1.5em" }}>Toggle Details</span>
                }
                arrow
              >
                <div onClick={onHeaderClick} className="headerFormatting">
                  {showBasicInfoView ? (
                    <BasicInfoView currentRow={props.currentRow} />
                  ) : (
                    <>
                      <h2>{props.currentRow.oppName}</h2>
                      <h3>{currentChart}</h3>
                    </>
                  )}
                </div>
              </Tooltip>
              <Tooltip
                title={<span style={{ fontSize: "1.5em" }}>Next Row</span>}
                arrow
              >
                <ArrowCircleRight
                  onClick={modalRightClick}
                  className="arrows"
                />
              </Tooltip>
            </div>
            {/*Body of Modal will be one of three different chart views*/}
            <div className="EModal-body">
              {showHistoryChart && (
                <ProbabilityHistoryChartView currentRow={props.currentRow} />
              )}
              {showIncreasingChart && (
                <ControlledPxWinChartView
                  currentRow={props.currentRow}
                  title="PX FACTORS INCREASING WIN TABLE"
                  type="increasing"
                />
              )}
              {showDecreasingChart && (
                <ControlledPxWinChartView
                  currentRow={props.currentRow}
                  title="PX FACTORS DECREASING WIN TABLE"
                  type="decreasing"
                />
              )}
            </div>
            {/*Footer od Modal has arrows to change which chart is shown*/}
            <div className="EModal-footer">
              <Tooltip
                title={<span style={{ fontSize: "1.5em" }}>Previos Chart</span>}
                arrow
              >
                <ArrowCircleUp
                  onClick={modalUpClick}
                  className="verticleArrows"
                />
              </Tooltip>
              <Tooltip
                title={<span style={{ fontSize: "1.5em" }}>Next Chart</span>}
                arrow
              >
                <ArrowCircleDown
                  onClick={modalDownClick}
                  className="verticleArrows"
                />
              </Tooltip>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BasicModal;
