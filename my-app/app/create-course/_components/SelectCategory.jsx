import CategoryList from '@/app/_shared/CategoryList'
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserInputContext } from '@/app/_context/UserinputContext'

function SelectCategory() {
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)

    const handleCategoryChange= (category) => {
            setUserCourseInput(prev => ({
                ...prev,
                category:category
            }))
    }
  return (
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
      {CategoryList.map((item,index) => {
        return(
            <div className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer ${userCourseInput?.category==item.name&&'border-primary bg-blue-400'}`} onClick={() => handleCategoryChange(item.name)}>
                <Image src={item.icon} width={item.name == 'Creative'? 70:100} height={100}/>
                <h2>{item.name}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default SelectCategory
