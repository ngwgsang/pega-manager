import React from 'react'
import UserCard from './UserCard'

export default function UserGrid() {
  return (
    <div className='grid row'>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
    </div>
  )
}
