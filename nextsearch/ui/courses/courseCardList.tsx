import React from 'react';
import CourseCard from './courseCard';
import { Course } from '@/types'

interface CoursesListProps {
    list: Course[]
}

export default function CoursesList({ list = [] }: CoursesListProps) {
    return (
    <div className='grid grid-cols-1 gap-12 p-8 bg-transparent bgGrad sm:grid-cols-3 md:grid-cols-4' >
        { list.map(course => <CourseCard key={course.id} course={course} />) }
    </div> )
}