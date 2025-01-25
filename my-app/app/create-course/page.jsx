"use client"

import React, { useEffect, useState } from 'react'
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import SelectCategory from './_components/SelectCategory'
import TopicDescription from './_components/TopicDescription'
import SelectOption from './_components/SelectOption'
import { useContext } from 'react'
import { UserInputContext } from '@/app/_context/UserinputContext'
import { GenerateCourseLayout_AI } from '@/configs/AI-models'
import LoadingDialog from './_components/LoadingDialog'


function CreateCourse() {

    const StepperOptions=[{
        id:1,
        name:'Category',
        icon: <HiMiniSquares2X2/>
    },
    {
        id:2,
        name:'Topic & Desc',
        icon: <HiLightBulb/>
    },
    {
        id:3,
        name:'Category',
        icon: <HiClipboardDocumentCheck/>
    }]
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(() => {
        console.log(userCourseInput)
    },[userCourseInput])

    const checkStatus =() => {
        if(userCourseInput?.length == 0){
            return true
        }
        else{
            return false
        }
    }

    const [loading,setLoading] = useState(false)

    const GenerateCourseLayout =async () => {
        setLoading(true)
        const Basic_prompt = 'Generate A Course Tutorial on Following Detail With field as Course Name,Description,Along with Chapter Name,about, Duration:'
        const user_prompt = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic},Level: ${userCourseInput?.level}, Duration: ${userCourseInput?.duration}, NoOf Chapters:${userCourseInput?.noOfChapters}, in JSON format`
        const final_prompt = Basic_prompt+user_prompt
        const result = await GenerateCourseLayout_AI.sendMessage(final_prompt);
        let responseText = await result.response?.text();
        responseText = responseText.replace(/^json\s*/, ''); // Remove "json" from the beginning
        console.log(responseText);
        const parsedResult = JSON.parse(await result.response?.text());
        console.log(parsedResult);
        setLoading(false)
    }
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
        <div className='flex mt-10'>
            {StepperOptions.map((item,index) => {
                return(<div className='flex items-center'>
                    <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                        <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index && 'bg-purple-500'}`}>
                            {item.icon}
                        </div>
                        <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                    </div>
                    {index!=StepperOptions?.length-1 && 
                    <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                    ${activeIndex-1>=index && 'bg-purple-500'}
                    `}></div>}
                </div>)
            })

            }
        </div>
      </div>
      <div className='px-10 md:px-20 lg:px-44 mt-10'>
            {activeIndex == 0? <SelectCategory/>:activeIndex == 1?<TopicDescription/>:<SelectOption/>}
            <div className='flex justify-between mt-10'>
                <Button variant="outline" disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex-1)}>Previous</Button>
                {activeIndex<2 && <Button disabled={checkStatus()}onClick={() => setActiveIndex(activeIndex+1)}>Next</Button>}
                {activeIndex == 2 && <Button onClick={() => GenerateCourseLayout()}>Generate Course Layout</Button>}
            </div>
      </div>
      <LoadingDialog loading={loading}></LoadingDialog>
    </div>
  )
}

export default CreateCourse
