import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/AuthSlice'
import { getPost } from '../features/PostSlice'

const Home = () => {
    const dispatch = useDispatch()
  const {user}=useSelector((state)=>state.auth)
  const {postList}=useSelector((state)=>state.post)
  
  useEffect(()=>{
    dispatch(getPost())
    
  },[])
  console.log(postList);
  return (
    <div>
      Hoşgeldiniz {user.name} {user.email} {user.password}
      <button onClick={()=>dispatch(clearUser())}>çıkış</button>
    </div>
  )
}

export default Home
