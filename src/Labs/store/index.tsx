import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReducExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReducExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReducExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReducExamples/todos/TodoReducer";


export type TodoType = {
  id: string;
  title: string;
};



export interface LabState {
  helloReducer: { message: string; };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
};

}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;