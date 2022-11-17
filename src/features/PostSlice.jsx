import { createSlice } from '@reduxjs/toolkit'

const initialState = {
postList:[],
loading:false,
error:false
}

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost:(state,action)=>{
        state.postList=[]
    }
  }
});

export const {clearPost} = PostSlice.actions

export default PostSlice.reducer