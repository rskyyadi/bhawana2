import React from 'react'
import RDatePicker from 'react-datepicker'

const DatePicker = props => {
  return (
    <div className="mb-2 d-flex flex-column">
      <small>{props.label}</small>
      <RDatePicker 
        {...props}
        className={`form-control form-control-sm ${props.error && "is-invalid"}`}
      />
      <small className="text-danger pt-1">{props.error && props.errorText}</small>
    </div>
  )
}

export default DatePicker
