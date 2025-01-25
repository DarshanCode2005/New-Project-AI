"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useContext } from 'react'
import { UserInputContext } from '@/app/_context/UserinputContext'


function TopicDescription() {
        const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)

        const handleInputChange=(fieldName,value) => {
            setUserCourseInput(prev => ({
                ...prev,
                [fieldName]:value
            }))
        }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Input Topic */}
        <div className='mt-5'>
            <label className='mb-10'>Write the topic for which you want to generate the course</label>
            <Input placeholder="Topic" onChange={(e) => handleInputChange('topic',e.target.value)} defaultValue={userCourseInput?.topic}/>
        </div>
        {/* Text Area Dsc */}
        <div className='mt-5'>
            <label>Tell us more about your course, what you want to include in the course</label>
            <Textarea placeholder="Course Description" onChange={(e) => handleInputChange('description',e.target.value)} defaultValue={userCourseInput?.description}></Textarea>
        </div>
    </div>
  )
}

export default TopicDescription
