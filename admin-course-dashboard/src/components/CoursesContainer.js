import React, { Component } from 'react'
import axios from 'axios'

class CoursesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/courses.json')
    .then(response => {
      console.log(response)
      this.setState({courses: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.courses.map((course) => {
          return(
            <div className="tile" key={course.id} >
              <h4>{course.title}</h4>
            </div>
          )       
        })}
      </div>
    );
  }
}

export default CoursesContainer