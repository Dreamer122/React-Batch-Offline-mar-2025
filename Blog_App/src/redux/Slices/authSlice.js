import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        loggedin:localStorage.getItem("user")?true:false,
        user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
    },
    reducers:{
        setUser:(state,action)=>{
            state.loggedin=true
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.loggedin=false
            state.user=null
        },
        setLoading:(state,action)=>{
            state.loading=action.payload

        }
    }
});
export const {setUser,logout,setLoading}=authSlice.actions
export default authSlice.reducer
