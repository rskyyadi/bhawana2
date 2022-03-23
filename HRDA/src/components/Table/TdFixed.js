import React from 'react'

const TdFixed = ({ children, colSpan, rowSpan, textRight }) => {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`p-1 px-2 text-center ${textRight && 'text-right'}`}
      style={{
        fontSize: '12px'
      }}
    >
      {children}
    </td>
  )
}

export default TdFixed
