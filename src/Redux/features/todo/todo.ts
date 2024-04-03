import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodos = {
  title: string;
  description: string;
  isCompleted?: boolean;
  priority : string ;
  id : string
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
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
