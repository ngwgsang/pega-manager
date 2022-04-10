import React from 'react'

export default function User() {
  return (
    <div className='user-card col'>
        <span className='nickname'>sangcamap</span>
        <img src=""/>
        <div className='info'>
          <p className='bold'><span className='label'> Tổng VIS </span><span className='rounded-box hold'>9999</span></p>
          {/* <p className='bold'>Tổng thu hôm nay <span className='rounded-box today'>99</span></p>
          <p className='bold row'>Win   
            <span className='rounded-box'>🥇: 2</span>
            <span className='rounded-box'>🥈: 3</span>
            <span className='rounded-box'>🥉: 7</span>
          </p> */}
        </div>
    </div>
  )
}
