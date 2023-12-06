import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@/ui/clientImports';

import { Course } from '@/types'

interface CourseCardProps {
    course: Course
}

export default function CourseCard({course}: CourseCardProps) {
    return (
      <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            className='h-full w-full rounded-lg'
            src={`${course.img}`}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {course.title}
          </Typography>
          <Typography>
            {course.discription}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Typography variant="h5" color="blue-gray" className="mb-2 flex">
        Course Type: 
          <Typography variant="h5" color="blue-gray" className="mb-2 ps-2">
          {course.isFree ? 'Free🎉' : 'Paid💵'}
          </Typography>
        </Typography>
          <Button className='color-red-200'>Enrol</Button>
        </CardFooter>
      </Card>
    );
  }