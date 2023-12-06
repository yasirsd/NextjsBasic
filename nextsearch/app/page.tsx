'use server'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import CourseCardList from '@/ui/courses/courseCardList'
import SearchBar from '@/ui/components/search'


const searchValue = (text?: any)=>{
  'use server'
  console.log("TEXT-----", text)
  let value = text ? text : '' 
  return value
 }

async function getCourse() {
  const prisma = new PrismaClient()
  const courseData = await prisma.course.findMany({})
  return courseData
}


export default async function Home() {
  const data = await getCourse()
  return (
    <div>
     <SearchBar searchCallback={searchValue}/>
      <div>
        <CourseCardList list={data}/>
      </div>
    </div>
  )
}
export {searchValue}