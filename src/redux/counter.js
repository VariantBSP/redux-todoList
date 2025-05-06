import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    inputTodo: '',
    todos: [
        {id:1, content:"go to the market"},
        {id:2, content:"Buy Fuel"},
        {id:3, content:"Click on Task to delete it"},
    ]
  },
  reducers: {
    dispatchAddTodo: state => {
        const newTodo = {id: state.todos.length + 3, content: state.inputTodo}
        return { ...state, todos: [...state.todos, newTodo]}
    },
    dispatchDeleteTodo: (state, action) => {
        const id = action.payload;
        const todos = state.todos.filter(todo =>{
            return todo.id !== id
          });
        return { ...state, todos}
    },
    dispatchHandleChange: (state, action) => {
        return{ ...state, inputTodo: action.payload}
    }
  }
})

// Action creators are generated for each case reducer function
export const { dispatchAddTodo, dispatchDeleteTodo, dispatchHandleChange } = counterSlice.actions

export default counterSlice.reducer