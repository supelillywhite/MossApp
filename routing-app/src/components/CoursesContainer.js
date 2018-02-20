import React, { Component } from 'react'
import axios from 'axios'
import Course from './Course'
import CourseForm from './CourseForm'
import update from 'immutability-helper'

class CoursesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      editingCourseId: null,
      notification: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/courses.json')
    .then(response => {
      this.setState({courses: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewCourse = () => {
    axios.post(
      'http://localhost:3001/api/v1/courses',
      { course:
        {
          title: '',
          description: ''
        }
      }
      )
    .then(response => {
      const courses = update(this.state.courses, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        courses: courses, 
        editingCourseId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateCourse = (course) => {
    const courseIndex = this.state.courses.findIndex(x => x.id === course.id)
    const courses = update(this.state.courses, {[courseIndex]: { $set: course }})
    this.setState({courses: courses, notification: 'All changes saved'})
  }

  deleteCourse = (id) => {
    axios.delete(`http://localhost:3001/api/v1/courses/${id}`)
    .then(response => {
      const courseIndex = this.state.courses.findIndex(x => x.id === id)
      const courses = update(this.state.courses, { $splice: [[courseIndex, 1]]})
      this.setState({courses: courses})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: ''})}

  enableEditing = (id) => {
    this.setState({editingCourseId: id}, () => {this.title.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newCourseButton" onClick={this.addNewCourse} >New Course</button>
          <span className="notification">{this.state.notification}</span>
        </div>
        {this.state.courses.map((course) => {
          if(this.state.editingCourseId === course.id) {
            return(<CourseForm course={course} key={course.id} updateCourse={this.updateCourse}
              titleRef= {input => this.title = input}
              resetNotification={this.resetNotification} />)
          } else {
            return (<Course course={course} key={course.id} onClick={this.enableEditing} 
              onDelete={this.deleteCourse} />)
          }
        })}
      </div>
      );
  }
}

export default CoursesContainer