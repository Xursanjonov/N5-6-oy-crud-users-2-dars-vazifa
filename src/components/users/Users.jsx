import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { deleteToUser, updateToUser } from '../../context/slice/userSlice'
import { toast } from 'react-toastify'
import "./Users.css"

function Users({ data }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const timeString = createdAt.split('T')[1].substring(0, 5);

  const removeUser = (user) => {
    dispatch(deleteToUser(user))
    toast.success('User remove 👍')
  }
  const editUser = (user) => {
    dispatch(updateToUser(user))
    navigate('/create-user')
    // toast.success('User updated 👍')
  }

  const usersData = data?.map(user => {
    // const createdAt = user.createdAt

    return (
      <div key={user.id} className="users__card">
        <img src={user.gender === 'male' ? male : female} alt="" />
        <h2>{user?.name}</h2>
        <p>{user?.profession}</p>
        <p>{user.age} years old</p>
        <div className="users__card-btns-time">
          <div className="users__card-btns">
            <button className='removeBtn' onClick={() => removeUser(user)}>Remove</button>
            <button className='editBtn' onClick={() => editUser(user)}>Edit</button>
          </div>
          <p className="createAt">
            {user.createdAt.split('T')[1].substring(0, 5)}
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className='users__wrapper'> {usersData} </div>
  )
}

export default Users