"use client"
import React from 'react'
import Image from 'next/image'
import { HiOutlineHome,HiOutlineShieldCheck,HiOutlineSquare3Stack3D, HiOutlinePower } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"

function SideBar() {
    const Menu =[
        {
            id:1,
            name:'Home',
            icon:<HiOutlineHome/>,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon:<HiOutlineSquare3Stack3D/>,
            path:'/dashboard/explore'
        },
        {
            id:1,
            name:'Upgrade',
            icon:<HiOutlineShieldCheck/>,
            path:'/dashboard/upgrade'
        },
        {
            id:1,
            name:'Logout',
            icon:<HiOutlinePower/>,
            path:'/dashboard/logout' 
        }
    ]

    const path = usePathname()
return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/final-logo.png'} width={200} height={60} className='mt-0 p-0' style={{ marginTop: '0px' }}/>
        <hr className='my-2'/>
        <ul>
            
                {Menu.map((item,index) => {
                    return (
                        <Link href={item.path}>
                            <li key={item.id} className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2 ${item.path == path&&'bg-gray-100 text-black'}`}>
                                <div className='text-2xl'>{item.icon}</div>
                                <h2>{item.name}</h2>
                            </li>
                        </Link>
                    )
                })}
            
        </ul>

        <div className='absolute bottom-10 w-[80%]'>
            <Progress value={33}></Progress>
            <h2 className='text-sm my-2'>3 out of 5 course created</h2>
            <h2 className='text-xs text-gray-500'>Upgrade your plan </h2>
        </div>
    </div>
)
}

export default SideBar
