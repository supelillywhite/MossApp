import React, { Component } from 'react'
import axios from 'axios'

class CourseContainer extends Component {
  state = {
    course: {}
  }


  render() {
    let id = parseInt(this.props.match.params.id, 10)

    if (id !== this.state.course.id) {
      axios.get('http://localhost:3001/api/v1/courses/' + id)
      .then(response => {
        this.setState({course: response.data})
      })
      .catch(error => console.log(error))
    }
    
    return (
      <div className="tile" key={this.state.course.id} >
        <h4>{this.state.course.title}</h4>
        <p>{this.state.course.description}</p>
      </div>
    );
  }
}

export default CourseContainer