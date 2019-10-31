import React, { Component } from 'react';

class MenuComponent extends Component {

    constructor(props) {
        super(props)

        this.gotoCourses = this.gotoCourses.bind(this)
        this.gotoSearch = this.gotoSearch.bind(this)
    }

    gotoCourses() {
        this.props.history.push(`/courses`)
    }

    gotoSearch() {
        this.props.history.push(`/search`)
    }

    render() {
        return (
            <div className="container">
            <h3>Menu</h3>
            <tbody>
            <tr>
            <td><button className="btn btn-success" onClick={this.gotoCourses}>View all Courses</button></td>
            <td><button className="btn btn-success" onClick={this.gotoSearch}>Search by id</button></td>
            </tr>
            </tbody>
            </div>
        )
    }
}

export default MenuComponent