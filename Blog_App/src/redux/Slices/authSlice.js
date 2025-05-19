import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loggedin:false,
        user:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.loggedin=true
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.loggedin=false
            state.user=null
        }
    }
});
export const {setUser,logout}=authSlice.actions
export default authSlice.reducer
