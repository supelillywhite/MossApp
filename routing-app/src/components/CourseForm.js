import React, { Component } from 'react'
import axios from 'axios'

class CourseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.course.title,
      description: this.props.course.description
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const course = {
      title: this.state.title,
      description: this.state.description
    }

    axios.put(
      `http://localhost:3001/api/v1/courses/${this.props.course.id}`,
      {
        course: course
      })
    .then(response => {
      console.log(response)
      this.props.updateCourse(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="title" placeholder='Enter a Title'
              value={this.state.title} onChange={this.handleInput}
              ref={this.props.titleRef} />
          <textarea className='input' name="description"
            placeholder='Describe your course' 
            value={this.state.description} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}

export default CourseForm