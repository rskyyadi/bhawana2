import React from 'react'
import {
  Button,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap'
import {
  IoTrashBinOutline
} from 'react-icons/io5'

const DeleteButton = ({ onClick, tooltipText, tooltipPlacement }) => {
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip>
          {tooltipText ? tooltipText : 'Hapus data'}
        </Tooltip>
      }
    >
      <Button 
        variant="danger"
        size="sm"
        className="m-1"
        onClick={onClick}
      >
        <IoTrashBinOutline/>
      </Button>
    </OverlayTrigger>
  )
}

export default DeleteButton
