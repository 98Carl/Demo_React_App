import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class SearchComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    /*componentDidMount() {

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
            
    }*/

    onSubmit(values) {
        //let username = INSTRUCTOR

        /*let course = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        } */

        CourseDataService.retrieveCourse(INSTRUCTOR, values.id)
                .then(
                    response => {
                        console.log(response)
                        this.props.history.push(`/courses/${values.id}`)
                    }
                )
    }

    validate(values) {
        let errors = {}
        if (!values.id) {
            errors.id = 'Enter an id'
        }
        return errors
        }

    render() {
        return (
            <div className="container">
                <h3>Search</h3>
                <Formik
                    
                    initialValues= {this.state}
                    onSubmit={this.onSubmit}
                    //validate={this.validate}
                    //enableReinitialize={true}

                >

                    {

                        (props) => (
                            <Form>

                                <fieldset className="form-group">

                                    <label>Search id</label>

                                    <Field className="form-control" type="text" name="id" />

                                </fieldset>

                                <ErrorMessage name="id" component="div" className="alert alert-warning" />

                                <button className="btn btn-success" type="submit">Search</button>

                            </Form>

                        )

                    }

                </Formik>
            </div>
        )
    }
}

export default SearchComponent