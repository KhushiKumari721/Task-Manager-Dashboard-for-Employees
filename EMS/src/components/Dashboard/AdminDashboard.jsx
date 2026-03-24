import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />   
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard


//Ye changeUser actually setUser hai jo App.jsx se aaya tha Matlab Admin agar logout kare setUser(null) call hoga
