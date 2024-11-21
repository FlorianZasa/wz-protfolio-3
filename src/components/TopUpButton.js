import React from 'react'
import './TopUpButton.css'

function TopUpButton({showTopUp, scrollUp}) {
  return (
    <button className={showTopUp} onClick={scrollUp}>
      <img src={`${process.env.PUBLIC_URL}/arrow_up.png`} alt='arrow' height={20} />
    </button>
  )
}

export default TopUpButton