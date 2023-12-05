import React from 'react';
import CourseCard from './courseCard';
import { Course } from '@/types'

interface CoursesListProps {
    list: Course[]
}

export default function CoursesList({ list = [] }: CoursesListProps) {
    return (
    <div className='grid grid-cols-4 gap-6 p-8 bg-transparent bgGrad' >
        { list.map(course => <CourseCard key={course.id} course={course} />) }
    </div> )
}