import React from 'react'

const Action = ({ type, handleClick }) => {
  return (
    <button onClick={handleClick}>
        {type}
    </button>
  )
}

export default Action