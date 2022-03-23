import React from "react";
import { Table as BSTable } from "react-bootstrap";

const Table = ({ children }) => {
  return (
    <BSTable bordered hover responsive className="bg-white overflow-hidden border-1 shadow-sm">
      {children}
    </BSTable>
  );
};

export default Table;
