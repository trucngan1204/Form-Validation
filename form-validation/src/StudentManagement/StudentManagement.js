import React, { Component } from 'react';
import SearchStudent from './SearchStudent';
import StudentForm from './StudentForm';
import StudentList from './StudentList';


class StudentManagement extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className='text-left' style={{backgroundColor:'darkslategray', color:'white', height:'70px', paddingTop:'7px'}}>Thông tin sinh viên</h1>
                <StudentForm/>
                <SearchStudent/>
                <StudentList students={this.state}/>
            </div>
        );
    }
}

export default StudentManagement; 