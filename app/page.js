import React from 'react'
import TicketCard from './(components)/TicketCard'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  )
}

export default Dashboard