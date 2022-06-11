import React, { Component } from "react";
import { connect } from "react-redux";
class StudentList extends Component {
  render() {
    const { students, onSelectStudent} = this.props;
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => onSelectStudent(student)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.student.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectStudent: (student) => {
      const action = { type: "SELECT_STUDENT", student };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);