import React from "react";
import {
  OverlayTrigger,
  Tooltip
} from "react-bootstrap"
import ReactSwitch from "react-switch";

const Switch = ({ id, checked, onChange }) => {
  return (
    <OverlayTrigger
      overlay={
        <Tooltip>
          {checked ? 'Aktif' : 'Tidak aktif'}
        </Tooltip>
      }
    >
      <div className="d-flex align-items-center mx-1">
        <ReactSwitch
          id={id}
          checked={checked}
          onChange={onChange}
          draggable={false}
          onColor="#3B82F6"
        />
      </div>
    </OverlayTrigger>
  );
};

export default Switch;
