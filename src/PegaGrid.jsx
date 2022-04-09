import React from 'react'
import PegaCard from './PegaCard'

export default function PegaGrid() {
  return (
    <div className='grid row'>
        <PegaCard></PegaCard>
        <PegaCard></PegaCard>
        <PegaCard></PegaCard>
        <PegaCard></PegaCard>
    </div>
  )
}