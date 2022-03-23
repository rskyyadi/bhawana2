import React from 'react'

const Th = ({ children, style }) => {
  return (
    <th
      className="text-center align-middle"
      style={{
        fontSize: '14px',
        ...style
      }}
    >
      {children}
    </th>
  )
}

export default Th
