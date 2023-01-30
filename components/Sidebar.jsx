import React from 'react'

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20'></div>
      Sidebar
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
