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
            console.log('initial -> ', this.props);
            if(!this.state.loadedCourse) {
                const titleName = decodeURIComponent(this.props.location.search).replace('?courseName=', '');
                this.setState({
                    loadedCourse: {
                        id: +this.props.match.params.id,
                        title: titleName
                    }
                });
            } else if( this.state.loadedCourse.id !== +this.props.match.params.id){
                const titleName = decodeURIComponent(this.props.location.search).replace('?courseName=', '');
                this.setState({
                    loadedCourse: {
                        id: +this.props.match.params.id,
                        title: titleName
                    }
                });
            }
        }
    }

    render () {
        let course = <h1>Please choose a course!</h1>;
        if(this.state.loadedCourse) {
            course = (
                <div>
                    <h1>{this.state.loadedCourse.title}</h1>
                    <p>You selected the Course with ID: {this.state.loadedCourse.id}</p>
                </div>
            );
        }
        return course;
    }
}

export default Course;