import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createStudent } from '../actions/studentAction'
import { updateStudent } from '../actions/studentAction'
import { StudentSchema } from './studentValidation'
import { useState, useEffect } from 'react'

const StuForm = () => {
  const [values, setValues] = useState({
    id: "",
    fullName: "",
    phoneNum: "",
    email: "",

  })
  const selectedStudent = useSelector(state => state.selectedStudent)

  const dispatch = useDispatch()


  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    if (selectedStudent.id) {
      console.log("Update")
      const action = updateStudent(selectedStudent.id, values)
      dispatch(action)
    } else {
      console.log("Create")
      const newStudent = { ...values }
      const action = createStudent(newStudent)
      dispatch(action)
    }

    resetForm()
    setValues({
      id: '',
      fullName: '',
      phoneNum: '',
      email: '',
    })
  }

  useEffect(() => {
    if (selectedStudent.id) {
      setValues(selectedStudent)
    }
  }, [selectedStudent])
  return (
    <Formik
      initialValues={values}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={StudentSchema}
    >{({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting }) => {

      return (
        <Form onSubmit={(values) => handleSubmit(values)}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  ID
                </label>
                <Field
                  type="text"
                  id="id"
                  className="form-control"
                  name="id"
                  value={values.id}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="id">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
              </div>

              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Họ và Tên
                </label>
                <Field
                  type="text"
                  id="fullName"
                  className="form-control"
                  name="fullName"
                  value={values.fullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="fullName">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="phoneNum" className="form-label">
                  Số điện thoại
                </label>
                <Field
                  type="phoneNum"
                  id="phoneNum"
                  className="form-control"
                  name="phoneNum"
                  value={values.phoneNum}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="phoneNum">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="email">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
              </div>
            </div>
            <button type='submit' disabled={isSubmitting} className="btn btn-success">Submit</button>
          </div>


        </Form>
      )
    }}</Formik >
  )
}

export default StuForm