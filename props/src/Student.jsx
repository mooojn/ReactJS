import React from 'react'
import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <>
        <div className='Student'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"Yes":"No"}</p>
        </div>
    </>
  )
}
// prop vars type checking 
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
// default prop values
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}

export default Student