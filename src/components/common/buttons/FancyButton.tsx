import React from 'react'

type Props = {
    text: string;
    size?: string;
}

const FancyButton = (props: Props) => {
  return (
    <button className={` rounded-full font-corporate bg-[#9333ea] ${props.size === 'sm' ?"text-xs px-4 py-1 bg-[transparent] border-2 border-[#9333ea]" :"px-6 py-3" } `}>{props.text}</button>
  )
}

export default FancyButton