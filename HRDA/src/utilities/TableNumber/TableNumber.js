const TableNumber = (page, dataLength, index) => {
  const pageNum = page * dataLength + (index + 1) - dataLength

  return pageNum
}

export default TableNumber