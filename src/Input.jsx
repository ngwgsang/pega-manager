import React from 'react'

export default function Input() {
  return (
    <div className='col'>
        <div className='row'>
            <input 
                type="text" 
                placeholder='#Pega-ID'
                className='input-pegaId'/>
            <button 
                type='button' 
                className='input-addPegaBtn'>Thêm ngựa</button>
        </div>
        <div className='row'>
            <input 
                type="text" 
                placeholder='#Metamask'
                className='input-metamask'/>
            <button 
                type='button' 
                className='input-addUserBtn'>Thêm địa chỉ</button>
        </div>
    </div>
  )
}