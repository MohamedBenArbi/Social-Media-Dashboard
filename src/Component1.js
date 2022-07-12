import React from 'react'
import up from './icon-up.svg'
import down from './icon-down.svg'


export default function Component1(props) {
    return (


        <div className={'flex flex-col items-center justify-around w-1/6 m-3 border-t-4 rounded-md bg-Bl-100 h-1/4 ' + (props.tp == 'fb' ? 'border-Bl-200' : '') + (props.tp == 'ig' ? 'border-purple-400' : '') + (props.tp == 'tw' ? 'border-Bl-400' : '') + (props.tp == 'yt' ? 'border-Rd-100' : '')}
        >

            <div className='flex items-center justify-center '>
                <img className='mr-2' src={props.logo} />
                <p className='text-sm text-gray-400'>{props.username}</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-5xl font-bold text-white'>{props.number}</p>
                <p className='tracking-[4px] text-gray-600 '>{props.type}</p>
            </div>

            <div className='flex items-center justify-center'>
                <img src={`${props.td === '+' ? up : down}`} />
                <p className={` ${props.td === '+' ? 'text-Gr-100 font-bold' : 'text-red-800 font-bold'} `}> {props.today} Today</p>
            </div>

        </div>


    )
}
