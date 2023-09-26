import React from 'react'

import './CourseCart.css'

const CourseCart = (props) => {

  const {totalCourse, enrolledCourse} = props;

  let totalPrice = 0;
  let priceCount = 0;
  priceCount = enrolledCourse.reduce((sum, course) => sum + course.price, 0)
  totalPrice = parseFloat(priceCount.toFixed(2))

  return (
    <div className='user-choice'>
        <h3 className='text-center mb-3'>SummarY</h3>
        <p className='fs-5'><span className='fw-bold'>Total Courses: </span><span>{totalCourse}</span></p>
        <p>Course Enrolled: <span>{enrolledCourse.length}</span></p>
        <p>Total Price: <span className='fw-bold'>${totalPrice}</span></p>
    </div>
  )
}

export default CourseCart