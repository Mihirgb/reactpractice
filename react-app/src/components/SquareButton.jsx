import React from 'react'
const SquareButton = ({value,onSquareClick}) => {
  return (
    <button onClick={onSquareClick}>
        {value}
    </button>
  )
}

export default SquareButton