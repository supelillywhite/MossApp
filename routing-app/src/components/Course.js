import React, { Component } from 'react'

class Course extends Component {
  handleClick = () => { this.props.onClick(this.props.course.id) }
  
  handleDelete = () => { this.props.onDelete(this.props.course.id) }

  render () {
    return(
      <div className='tile'>
        <span className="deleteButton" onClick={this.handleDelete}>x</span>
        <h3 onClick={this.handleClick}>Course Title: {this.props.course.title}</h3>
        <h4>Course Description</h4>
        <p onClick={this.handleClick}>{this.props.course.description}</p>
      </div>
    )
  }
}

export default Course