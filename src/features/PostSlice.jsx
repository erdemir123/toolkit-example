import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from 'axios';


const initialState = {
postList:[],
loading:false,
error:false
}
export const getPost = createAsyncThunk(
    "getnews",
    async(thunAPI,{rejectWithValue})=>{
        const url =`https://jsonplaceholder.typicode.com/posts`
        try {
            const {data}= await axios(url)
            return data
        } catch (error) {
            return rejectWithValue("something went value")
        }
    }
)

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost:(state,action)=>{
        state.postList=[]
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getPost.pending,(state,action)=>{
        state.loading=true
    })
    .addCase(getPost.fulfilled,(state,action)=>{
        state.loading=false;
        state.postList=action.payload
    })
    .addCase(getPost.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
  }
});

export const {clearPost} = PostSlice.actions

export default PostSlice.reducer