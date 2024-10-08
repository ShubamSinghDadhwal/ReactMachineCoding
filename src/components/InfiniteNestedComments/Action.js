import React from 'react'

const Action = ({ type, handleClick }) => {
  return (
    <div onClick={handleClick}>
        {type}
    </div>
  )
}

export default Action