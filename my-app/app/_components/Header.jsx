import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

function Header() {
return (
    <div className='flex justify-between items-center p-3 shadow-md h-16'>
        <Image src={'/final-logo.png'} width={150} height={50}/>
        <Button>Get Started</Button>
    </div>
)
}

export default Header
