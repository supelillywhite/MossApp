import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import CoursesContainer from './components/CoursesContainer'
import CourseContainer from './components/CourseContainer'
import axios from 'axios'
import LinkageContainer from './components/LinkageContainer'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Courses = () => (
  <div>
    <h2>Courses</h2>
    <CoursesContainer />
  </div>
)

const BasicExample = () => (
  
  <Router>
    <div className="container">
      <div className="navbar-collapse backcolors">
        <ul className="nav navbar-nav">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Course Selection
            </a>
            <LinkageContainer />
            </li>
        </ul>
      </div>

      <Route exact path="/" component={Home}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/course/:id" component={CourseContainer}/>
    </div>
  </Router>
)
export default BasicExample