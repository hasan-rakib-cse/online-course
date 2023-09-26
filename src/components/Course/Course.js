import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Course.css';
import data from '../../data/courseData.json';
import CourseDesc from '../CourseDescription/CourseDesc';
import CourseCart from '../CourseCart/CourseCart';

const Course = () => {

    const [courses, setCourses] = useState([]);
    const [enrolledCourse, setEnrolledCourse] = useState([]);

    useEffect(() => {
        setCourses(data)
    }, [])

    const totalCourse = data.length;

    const handleAddCourse = (course) => {
        const addedCourse = [...enrolledCourse, course];
        setEnrolledCourse(addedCourse)
    }


  return (
    <div>
        <Container className='main'>
            <Row>
                <Col className="course-description" xs={{ span: 12, order: 2 }} md={{span: 9, order: 1}}>
                    <Row>
                        {courses.map(course => {
                            return (
                                
                                <Col key={course.id} xs={12} md={6} lg={4}>
                                    <CourseDesc course={course} addCourse={handleAddCourse} />
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col className="course-cart" xs={{ span: 12, order: 1 }} md={{span: 3, order: 2}}>
                    <CourseCart totalCourse={totalCourse} enrolledCourse={enrolledCourse} />
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Course

