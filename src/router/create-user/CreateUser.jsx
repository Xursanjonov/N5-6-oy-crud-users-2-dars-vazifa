import React, { useState } from 'react'
import "./CreateUser.css"
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/slice/userSlice'

function CreateUser() {
  const [name, setName] = useState('Jane Doe')
  const [username, setUsername] = useState('jondoe-team')
  const [email, setEmail] = useState('doejon@gmail')
  const [password, setPassword] = useState('12345')
  const [profession, setProfession] = useState('web-developer')
  const [age, setAge] = useState('22')
  const [gender, setGender] = useState('male')
  const dispatch = useDispatch()

  function inputReset() {
    setName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setProfession('')
    setAge('')
    setGender('')
  }
  const handaleSubmit = (e) => {
    e.preventDefault();
    let createTime = new Date()
    let newUser = {
      id: createTime.getTime(),
      name, profession, password, email, username, age: +age, gender,
      createdAt: createTime.toISOString(),
      updatedAt: createTime.toISOString()
    }
    dispatch(addToUsers(newUser));
    toast.success(`New user add 👍`)
    inputReset()  
  }

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handaleSubmit} className='create__user-form' >
        <input required value={name}
          onChange={e => setName(e.target.value)}
          type="text" placeholder='name'
        />
        <input required value={username}
          onChange={e => setUsername(e.target.value)}
          type="text" placeholder='username'
        />
        <input required value={email}
          onChange={e => setEmail(e.target.value)}
          type="email" placeholder='email'
        />
        <input required value={password}
          onChange={e => setPassword(e.target.value)}
          type="password" placeholder='password'
        />
        <input required value={profession}
          onChange={e => setProfession(e.target.value)}
          type="text" placeholder='profession'
        />
        <input required
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number" placeholder='age'
        />
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option disabled value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser