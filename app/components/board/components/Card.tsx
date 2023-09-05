'use client'
import { useState } from "react";

type CardProps = {
    value: number;
}

export function Card({ value }: CardProps){
    const [faceCard, setFaceCard] = useState(false)
    return(
        <div className='flex items-center justify-center1 rounded p-20 bg-white text-black transition duration-300 ease cursor-pointer hover:opacity-60'>
            <span>{value}</span>
        </div>
    )
}