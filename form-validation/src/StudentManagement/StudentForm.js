import React, { Component } from "react";
import { connect } from "react-redux";

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.student.id) {
      this.props.onUpdateStudent(this.props.student.id, this.state.values);
    } else {
      const id = Math.floor(Math.random() * 100);
      const student = { ...this.state.values, id };
      this.props.onCreateStudent(student);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.student.id !== this.props.student.id) {
      this.setState({ values: { ...this.props.student } });
    }
  }

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Mã sinh viên
              </label>
              <input
                type="text"
                id="id"
                className="form-control"
                name="id"
                value={values.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                name="phone"
                value={values.phone}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={values.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="btn btn-success">Thêm sinh viên</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    student: state.student.selectedStudent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateStudent: (student) => {
      const action = { type: "CREATE_STUDENT", student };
      dispatch(action);
    },

    onUpdateStudent: (studentId, student) => {
      const action = { type: "UPDATE_STUDENT", studentId, student };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);