import React from 'react'

function Bodycontent() {
  return (
    <div>
        <container>
            <div className='flex w-full h-[70vh]  gap-14 mt-[130px]'>
                <div className='w-[337px] h-[290px] ml-[220px] '>
                    <h1 className='text-left font-bold text-2xl text-violet-950'>Why we are <br /> better than <br /> others</h1>
                    <p className='text-left mt-[0.5rem] text-violet-950 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className='w-[300px] h-[400px]  rounded-xl shadow-xl shadow-black/40'>
                  <img src="./assets/saly.png" alt="" className='ml-[75px] mt-[40px]'/>
                  <p className='text-2xl font-bold mt-[19px]'>Convenient study <br /> schedule</p>
                </div>
                <div className='w-[300px] h-[400px]  rounded-xl mt-[12rem] shadow-xl shadow-black/40'>
                  <img src="./assets/undraw.png" alt="" className='w-[190px] h-[181px] mt-[48px] ml-[56px]' />
                  <p className='text-2xl font-bold mt-[20px]'>Checked <br /> homework by <br /> teachers</p>
                </div>
                <div className='w-[300px] h-[400px]  rounded-xl shadow-xl shadow-black/40'>
                  <img src="./assets/future.png" alt="" className='w-[181px] h-[181px] mt-[29px] ml-[56px]'/>
                  <p className='text-2xl font-bold mt-[25px]'>Modern internet <br /> platform</p>
                </div>
            </div>
        </container>
    </div>
  )
}

export default Bodycontent