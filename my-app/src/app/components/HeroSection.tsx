"use client"
import React, { useState } from 'react'

const HeroSection = () => {
    const [modal, setmodal] = useState(false)
  return (
    <div className="bg-[url('../../public/bgImg.png')] w-full h-[100vh] bg-center bg-cover ">
        <div className='pt-2+0 w-10/12 m-auto flex justify-around h-screen'>
            <div className='bg-[#ffffff60] my-auto rounded-xl text-center shadow-lg'>
                <img src="multi.png" alt="" className='w-[220px] mx-16 my-5'/>
                <button onClick={()=>setmodal(true)} className='bg-black m-auto flex mb-8 py-3 justify-center rounded-xl w-10/12 uppercase font-semibold text-2xl '>Play with Friends</button>
            </div>
            <div className='bg-[#ffffff60] my-auto rounded-xl text-center shadow-lg'>
                <img src="solo.png" alt="" className='w-[220px] mx-16 my-5'/>
                <button onClick={()=>setmodal(true)} className='bg-black m-auto flex mb-8 py-3 justify-center rounded-xl w-10/12 uppercase font-semibold text-2xl '>Play solo</button>
            </div>
        </div>

        {/* ========== Modal ============ */}

        <div>
        <div className={`${!modal ? "hidden" : ""} w-full h-screen fixed top-0 right-0 bg-[#00000086] uppercase`}>
      <div className="bg-[#13120D] m-auto w-[350px] h-[500px] flex flex-col justify-between my-32 rounded-xl">
        <div className="flex flex-col justify-between">
          <div className="flex bg-black justify-between py-4 px-10 rounded-t-xl">
            <p>Create</p>
            <p>Join</p>
          </div>

          <p className="text-center py-8 text-2xl">select lobby fee</p>

          <div className="flex justify-around py-6">
            <img src="Minus.png" alt="" className="my-auto w-[40px]" />
            <img src="diamond.png" alt="" className="w-[160px]" />
            <img src="Plus.png" alt="" className="my-auto w-[40px]" />
          </div>
          <input
            type="number"
            className="w-1/2 m-auto flex text-center rounded py-1 text-black px-5"
          />
        </div>
        <div className="flex flex-col m-3 ">
            <button className="py-1 mt-2 w-1/2 m-auto bg-[#342F2C] uppercase">
                Next
            </button>
            <button onClick={()=> setmodal(false)} className="py-1 mt-2 w-1/2 m-auto bg-[#342F2C] uppercase">
                Close
            </button>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default HeroSection;
