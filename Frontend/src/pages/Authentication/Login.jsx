import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/doctor.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (signin) => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signin),
      });

      if (!res.ok) {
        throw new Error('Failed to login');
      }

      return res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const signin = { email, password };
    const res = await login(signin);

    if (res) {
      alert('Login Successful');
      navigate('/home'); 
    } else {
      alert('Login Failed');
    }
  };

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center'>
      <div className='w-[500px] h-[400px] mt-[-8%]'>
        <img src={image} alt='login' />
      </div>
      <div className='text-white'>
        <form className='bg-[#1c1c1e] p-8 rounded-lg shadow-lg w-[400px] h-[500px] mt-[%]' onSubmit={submitForm}>
          <div className='flex items-center gap-[8%] mt-[-5%] mb-5'>
            <h1 className='text-white text-2xl font-bold mb-6 '>Sign In</h1>
          </div>
          <div className='mb-4 mt-[-10%]'>
            <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>Password</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-black hover:bg-[#333] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='mt-6 ml-[5%]'>
          <p className='text-white'>
            Don't have an account? <Link to='/signup' className='text-blue-500'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
