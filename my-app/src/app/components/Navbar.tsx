import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black fixed w-full top-0 left-0'>
      <div className='w-11/12 flex justify-between m-auto py-3'>
        <img src="Logo.png" alt="" className='w-[250px] max-md:w-[180px]'/>

        {/* <div className='flex'>
            <img src="23.png" alt="" className='w-[45px] h-[45px] m-auto' />
            <p className='flex my-auto mx-3'>User_id</p>
        </div> */}
        
        <button className='py-2 px-4 rounded my-auto bg-[#342F2C] uppercase max-md:text-xs'>Connect Wallet</button>

      </div>
    </div>
  )
}

export default Navbar
