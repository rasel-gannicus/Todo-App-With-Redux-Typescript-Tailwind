import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodos = {
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
  id: string;
};
type TInitialState = {
  todos: TTodos[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    toggleTodo : (state,  action: PayloadAction<string>) =>{
      console.log(action.payload);
      // const selectedTodo = state.todos.find(item => item.id == action.payload);

      // selectedTodo?.isCompleted = !selectedTodo?.isCompleted;
      state.todos.find(item => {
        if(item.id == action.payload){
          item.isCompleted = !item.isCompleted ;
        }
        
      });
      // console.log(selectedTodo);
    }
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo } = todoSlice.actions;
