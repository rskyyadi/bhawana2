import React from 'react'

const Td = ({children, colSpan, rowSpan, textRight}) => {
  return (
    <td 
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`p-1 px-2 ${textRight && 'text-right'}`}
      style={{
        fontSize: '12px'
      }}
    >
      {children}
    </td>
  )
}

export default Td
