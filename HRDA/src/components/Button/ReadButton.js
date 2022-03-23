import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoEyeOutline } from "react-icons/io5";

const ReadButton = ({ onClick, tooltipText, tooltipPlacement }) => {
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip>
          {tooltipText ? tooltipText : 'Lihat detail data'}
        </Tooltip>
      }
    >
      <Button 
        variant="primary"
        size="sm"
        className="m-1"
        onClick={onClick}
      >
        <IoEyeOutline />
      </Button>
    </OverlayTrigger>
  );
};

export default ReadButton;
