import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null) 
  const [loggedInUserData, setLoggedInUserData] = useState(null) 
  const [userData,SetUserData] = useContext(AuthContext) 

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){  
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin')
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'admin', data: null })
    )
  } else {
    const employee = userData?.find(
      (e) => email === e.email && password === e.password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
    } else {
      alert("Invalid Credentials")
    }
  }
}

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App

/*
1️⃣ JSON.stringify()
 Object ko string bana deta hai.
Use tab karte hain jab data store ya send karna ho.

2️⃣ JSON.parse()
 String ko wapas object bana deta hai.
Use tab karte hain jab data read ya use karna ho.
*/