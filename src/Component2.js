import React from 'react'
import up from './icon-up.svg'
import down from './icon-down.svg'

export default function Component2(props) {
    return (

        <div className='flex flex-col w-1/6 m-3 rounded-md bg-Bl-100 h-[120px] '>

            <div className='flex items-center justify-between p-4 pl-8 pr-8'>
                <span className='text-gray-400'>{props.type}</span>
                <img src={props.logo} />
            </div>


            <div className='flex items-center justify-between p-4 pl-8 pr-8 mb-2'>
                <span className='text-3xl font-bold text-white'>{props.number}</span>
                <div className='flex items-center justify-center'>
                    <img src={`${props.td === '+' ? up : down}`} />
                    <span className={` ${props.td === '+' ? 'text-Gr-100 font-bold' : 'text-red-800 font-bold'} `}>{props.percent}%</span>
                </div>
            </div>


        </div>

    )
}
