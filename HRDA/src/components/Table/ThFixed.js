import React from 'react'

const ThFixed = ({children}) => {
  return (
    <th 
      className="p-1 px-2 text-center align-middle"
      style={{
        width: '20px',
        fontSize: '14px'
      }}
    >
      {children}
    </th>
  )
}

export default ThFixed
