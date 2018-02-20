import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class LinkageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/courses.json')
    .then(response => {
      this.setState({courses: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <ul className="dropdown-menu">
        {this.state.courses.map((course) => {
          return (
            <li className="dropdown-item cheese" key={course.id}><Link to={`/course/${course.id}`}>{course.title}</Link></li>
          )
        })}
      </ul>
    );
  }
}

export default LinkageContainer