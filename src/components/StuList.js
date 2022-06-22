import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStudent } from '../actions/studentAction'
import { deleteStudent } from '../actions/studentAction'

const StuList = () => {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()

    const onSelectStudent = (student) => {
        const action = selectStudent(student)
        dispatch(action)
    }

    const onDeleteStudent = (studentId) => {
        const action = deleteStudent(studentId)
        dispatch(action)
    }

    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.fullName}</td>
                            <td>{student.phoneNum}</td>
                            <td>{student.email}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    onClick={() => onSelectStudent(student)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDeleteStudent(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default StuList