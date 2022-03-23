import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoPrintOutline } from "react-icons/io5";

const PrintButton = ({ onClick, tooltipText, tooltipPlacement }) => {
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip>
          {tooltipText ? tooltipText : 'Cetak data'}
        </Tooltip>
      }
    >
      <Button 
        variant="warning"
        size="sm"
        className="m-1 text-white"
        onClick={onClick}
      >
        <IoPrintOutline />
      </Button>
    </OverlayTrigger>
  );
};

export default PrintButton;
