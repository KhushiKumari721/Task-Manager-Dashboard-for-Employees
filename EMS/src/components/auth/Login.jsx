import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)

        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                
                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'
                >
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter your email' 
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter password' 
                    />

                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                        Log in
                    </button>
                </form>

                {/* DEMO CREDENTIALS SECTION */}
                <div className='mt-6 text-sm text-gray-300 text-center'>
                    <p className='font-semibold text-emerald-400'>Demo Credentials</p>

                    <p className='mt-2'>👨‍💼 Admin:</p>
                    <p>Email: admin@me.com | Password: 123</p>

                     <p className='mt-2'>👤 Employee:</p>
                     <p>Email: e@e.com | Password: 123</p>
                     <p>Email: employee2@example.com | Password: 123</p>
                     <p>Email: employee5@example.com | Password: 123</p>
                     
                </div>

            </div>
        </div>
    )
}

export default Login