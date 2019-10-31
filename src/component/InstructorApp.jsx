import React, { Component } from 'react'
import ListCoursesComponent from './ListCoursesComponent'
import CourseComponent from './CourseComponent'
import MenuComponent from './MenuComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchComponent from './SearchComponent'

class InstructorApp extends Component {
    render() {
        return (
        <BrowserRouter>
            <>
              <h1>Demo Application</h1>
              <Switch>
                  <Route path="/" exact component={MenuComponent} />
                  <Route path="/search" exact component={SearchComponent} />
                  <Route path="/courses" exact component={ListCoursesComponent} />
                  <Route path="/courses/:id" component={CourseComponent} />
              </Switch>
              </>
        </BrowserRouter>
        )
    }
}

export default InstructorApp