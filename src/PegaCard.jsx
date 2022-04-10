import React from 'react'

export default function Pega(props) {
  return (
    <div className='pega-card'>
        <span>#${props.pegaid}</span>
        <span>@${props.peganame}</span>
        <span className='rounded-box top1'>VIS: 223</span>
        <span className='rounded-box top2'>WR: 23%</span>
    </div>
  )
}
