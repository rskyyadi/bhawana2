import React from 'react'
import {
  OverlayTrigger,
  Tooltip,
  Button
} from 'react-bootstrap'
import {
  AiOutlineEdit
} from 'react-icons/ai'

const UpdateButton = ({onClick, tooltipText, tooltipPlacement}) => {
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip>
          {tooltipText ? tooltipText : 'Ubah data'}
        </Tooltip>
      }
    >
      <Button 
        variant="success"
        size="sm"
        className="m-1"
        onClick={onClick}
      >
        <AiOutlineEdit style={{ fontSize: '.9rem' }} />
      </Button>
    </OverlayTrigger>
  )
}

export default UpdateButton
