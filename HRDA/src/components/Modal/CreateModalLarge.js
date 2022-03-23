import React from 'react'
import {
  Modal
} from 'react-bootstrap'
import {
  IoAddOutline,
  IoReaderOutline
} from 'react-icons/io5'

export const CreateModalLarge = ({show, onHide, children, title}) => {
  return (
    <Modal 
      show={show}
      onHide={onHide}
      dialogClassName="modal-xl"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          <h6 className="mb-0">
            <IoAddOutline 
              className="mb-1 mr-2" 
              size={20}
            />
            {title}
          </h6>
        </Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  )
}

export const UpdateModalLarge = ({show, onHide, children, title}) => {
    return (
      <Modal 
        show={show}
        onHide={onHide}
        dialogClassName="modal-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            <h6 className="mb-0">
              <IoAddOutline 
                className="mb-1 mr-2" 
                size={20}
              />
              {title}
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    )
  }

  export const ReadModalLarge = ({show, onHide, children}) => {
    return (
      <Modal 
        show={show}
        onHide={onHide}
        dialogClassName="modal-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-info">
            <h6 className="mb-0">
              <IoReaderOutline 
                className="mb-1 mr-2" 
                size={20}
              />
              Detail Data
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    )
  }
