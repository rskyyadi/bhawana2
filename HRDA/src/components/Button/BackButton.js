import React from 'react'
import {
  Button
} from 'react-bootstrap'
import {
  IoBackspaceOutline
} from 'react-icons/io5'

const BackButton = ({onClick, size}) => {
  return (
    <>
      <Button variant="outline-dark" onClick={onClick} size={size} className="mx-1 mb-1">
        <IoBackspaceOutline size={18} />
        <span className="ml-2 text-uppercase">Kembali</span>
      </Button>
    </>
  );
};

export default BackButton;
