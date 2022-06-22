import * as Yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const StudentSchema = Yup.object().shape({
    id: Yup.string().required('ID is required'),
    fullName: Yup.string().required('Full name is required'),
    phoneNum: Yup.string().required('Phone Number is required').matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email').required('Email is required'),
})
