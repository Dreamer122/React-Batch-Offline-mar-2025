import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allUserPost:[]
}
export const postSlice=createSlice({
    name:"posts",
    initialState:initialState,
    reducers:{
        setAllPost:(state,action)=>{
            state.allUserPost=[...action.payload]

        }
    }
})

export const {setAllPost}=postSlice.actions
export default postSlice.reducer