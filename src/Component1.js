import React from 'react'
import fb from './icon-facebook.svg'
import up from './icon-up.svg'

export default function Component1() {
    return (

        <div className='w-screen h-screen bg-Bl-300'>
            <div className='flex flex-col items-center justify-around w-1/6 border-t-4 rounded-md border-Bl-200 bg-Bl-100 h-1/4 '>

                <div className='flex items-center justify-center '>
                    <img className='mr-2' src={fb} />
                    <p className='text-sm text-gray-400'>@Mohamed Ben Arbi</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-5xl font-bold text-white'>1987</p>
                    <p className='tracking-[4px] text-gray-600 '>FOLLOWERS</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img src={up} />
                    <p className='font-bold text-Gr-100'> 12 Today</p>
                </div>

            </div>
        </div>

    )
}
