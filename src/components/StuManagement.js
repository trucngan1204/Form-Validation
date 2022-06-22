import React from 'react'
import StuList from './StuList'
import StuForm from './StuForm'

const StuManagement = () => {
    return (
        <div>
            <h1 className='bg-dark text-white'>Thông Tin Sinh Viên</h1>
            <StuForm />
            <StuList />

        </div>
    )
}

export default StuManagement