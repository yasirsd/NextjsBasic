import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import { json } from 'stream/consumers'
import CourseCardList from '@/ui/courses/courseCardList'

async function getCourse() {
  const prisma = new PrismaClient()
  const courseData = await prisma.course.findMany({})
  return courseData
}

export default async function Home() {
  const data = await getCourse()
  return (
    <div>
      <div className="input-group">
        <h1>This Search is made Using NEXTJS & Prisma...</h1>
        <div>
        <input type="email" className="input" id="Email" name="Email" placeholder="Enter a Course Name" />
        <input className="button--submit" value="Search" type="submit" />
          </div>
      </div>
      <div>
        <CourseCardList list={data}/>
      </div>
    </div>
  )
}
