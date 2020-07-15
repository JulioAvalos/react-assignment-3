import React, { Component } from 'react';

class Course extends Component {

    state = {
        loadedCourse: null
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate () {
        this.loadData();
    }

    loadData () {
        if(this.props.match.params.id) {
            // console.log('initial -> ', this.props.match.params.id);
            if(!this.state.loadedCourse) {
                console.log('changing course 1-> ', this.props.match.params.id);
                this.setState({loadedCourse: {id: +this.props.match.params.id}});
            } else if( this.state.loadedCourse.id !== +this.props.match.params.id){
                // console.log('changing course 2 -> ', this.props.match.params.id);
                this.setState({loadedCourse: {id: +this.props.match.params.id}});
                // this.props.history.push('/courses/' + this.props.match.params.id);
            }
        }
    }

    render () {
        let course = <h1>Please choose a course!</h1>;
        if(this.state.loadedCourse) {
            course = (
                <div>
                    <h1>_COURSE_TITLE_</h1>
                    <p>You selected the Course with ID: {this.state.loadedCourse.id}</p>
                </div>
            );
        }
        return course;
    }
}

export default Course;