import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDesc.css'
// import logo from './jquery.jpg';

const CourseDesc = (props) => {

    const {title, description, author, price, oldPrice, courseLevel, duration, rating, reviews, enrolled, image} = props.course

  return (
    <div className='course-content'>
        <Card>

            <Card.Img variant="top" src={image} />

            <Card.Body>

                <Card.Title as="h3">Basic {title}</Card.Title>
                <Card.Subtitle className="mt-2 mb-2 text-muted">{description.slice(0, 110) + '...'}</Card.Subtitle>

                <div className="blockquote-footer fw-bold font-monospace">{author}</div>

                <p className='review-rating'>
                    <span className='pe-1'><FontAwesomeIcon className='text-warning fa-md' icon={faStar} /></span>
                    <span className='me-1'>{rating}</span>
                    <span className='me-2'>({parseFloat((reviews/1000).toFixed(1))}K <span className='text-warning '>reviews</span>)</span>
                    <span>Enrolled- <b style={{fontSize: '12px'}}>{parseFloat((enrolled/1000).toFixed(1))}k</b></span>
                </p>

                <p className='course-level'>
                    <span className='me-2'><b>Level:</b> {courseLevel}</span>
                    <span><b>Duration:</b> {duration}</span>
                </p>

                <p>
                    <span><b className='me-2'>${parseFloat(price).toFixed(2)}</b></span>
                    <span><del><small className='text-danger'>${parseFloat(oldPrice).toFixed(2)}</small></del></span>
                </p>

            </Card.Body>
            <Card.Footer className="text-muted pt-3 text-center">
                <Button variant="success" onClick={() => props.addCourse(props.course)}>Enroll Now</Button>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default CourseDesc