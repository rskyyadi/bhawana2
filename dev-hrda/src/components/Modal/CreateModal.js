import React from 'react'
import {
  Modal
} from 'react-bootstrap'
import {
  IoAddOutline
} from 'react-icons/io5'

const CreateModal = ({show, size, onHide, children, title}) => {
  return (
    <Modal 
      show={show}
      onHide={onHide}
      size={size}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          <h6 className="mb-0">
            <IoAddOutline 
              className="mb-1 mr-2" 
              size={20}
            />
            Tambah Data {title}
          </h6>
        </Modal.Title>
      </Modal.Header>
        {children}
    </Modal>
  )
}

export default CreateModal
