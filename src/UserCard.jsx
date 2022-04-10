import React from 'react'

export default function User() {
  return (
    <div className='user-card col'>
        <span className='nickname'>sangcamap</span>
        <img src="https://images.unsplash.com/photo-1626276264267-1f861ffa1486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        <div className='info'>
          <p className='bold'>Tổng VIS <span className='rounded-box hold'>9999</span></p>
          <p className='bold'>Tổng thu hôm nay <span className='rounded-box today'>99</span></p>
          <p className='bold row'>Win   
            <span className='rounded-box'>🥇: 2</span>
            <span className='rounded-box'>🥈: 3</span>
            <span className='rounded-box'>🥉: 7</span>
          </p>
        </div>
    </div>
  )
}
