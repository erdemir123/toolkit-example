import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/AuthSlice'

const Home = () => {
    const dispatch = useDispatch()
  const {user}=useSelector((state)=>state.auth)
  return (
    <div>
      Hoşgeldiniz {user.name} {user.email} {user.password}
      <button onClick={()=>dispatch(clearUser())}>çıkış</button>
    </div>
  )
}

export default Home
