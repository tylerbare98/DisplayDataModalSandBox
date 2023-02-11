App.js

import "./styles.css";
import { useState } from "react";
import BasicTable from "./BasicTable";
import BasicModal from "./BasicModal";
import * as opportunities from "./opportunities.json";

export default function App() {
  //connect to "DB" (JSON file)
  const data = opportunities.default;

  //react hooks for state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  //functions for modal to scroll left or right
  const modalLeftClick = () => {
    if (currentRow.oppId > 1) {
      setCurrentRow(data.find((row) => row.oppId === currentRow.oppId - 1));
    } else {
      setCurrentRow(data.find((row) => row.oppId === data.length));
    }
  };
  const modalRightClick = () => {
    if (currentRow.oppId !== data.length) {
      setCurrentRow(data.find((row) => row.oppId === currentRow.oppId + 1));
    } else {
      setCurrentRow(data.find((row) => row.oppId === 1));
    }
  };

  //functions to open/close modal
  const openModal = (row) => {
    setCurrentRow(row);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //display a modal from here
  return (
    <div className="App">
      <BasicTable data={data} openModal={openModal}></BasicTable>
      {isModalOpen && (
        <BasicModal
          data={data}
          closeModal={closeModal}
          currentRow={currentRow}
          modalLeftClick={modalLeftClick}
          modalRightClick={modalRightClick}
        />
      )}
    </div>
  );
}

