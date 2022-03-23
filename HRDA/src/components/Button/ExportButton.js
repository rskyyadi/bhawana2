import React from 'react'
import {
  Button
} from 'react-bootstrap'
import {
  IoDocumentTextOutline
} from 'react-icons/io5'

const ExportButton = ({onClick}) => {
  return (
    <Button 
      variant="outline-success"
      onClick={onClick}
      className="mx-1 mb-1"
    >
      <IoDocumentTextOutline size={18} />
      <span className="ml-2 text-uppercase">
        Export
      </span>
    </Button>
  )
}

export default ExportButton
