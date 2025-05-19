import { createSlice ,nanoid} from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todo:[
            {id:1,text:"hello",completed:false}
        ],
        todoname:"MY TODO APP"
    },
    reducers:{
        addTodo:(state,action)=>{
            let newtask={
                id:nanoid(4),
                text:action.payload,
                completed:false
            }
           state.todo.push(newtask)
            
        },
        deleteTodo:(state,action)=>{
            state.todo=state.todo.filter((items)=>items.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            const todo=state.todo.find((task)=>task.id==action.payload.id)
            todo.text=action.payload.edittext

        }
    }
})

export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer