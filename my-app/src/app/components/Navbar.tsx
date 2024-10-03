import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black fixed w-full top-0 left-0'>
      <div className='w-11/12 flex justify-between m-auto py-3'>
        <img src="logo.png" alt="" className='w-[250px]'/>
        <div className='flex'>
            <img src="23.png" alt="" className='w-[45px] h-[45px] m-auto' />
            <p className='flex my-auto mx-3'>User_id</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
