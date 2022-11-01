import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { TodosState } from "../../model/Todo";

const initialState : TodosState = {
    value : [],
    todoInput : '',
    isCheckTodo : [],
    isCheckBoxTodo : [],
    isCheckAll : false,
}

export const todolistSlice = createSlice({
    name : 'todolist',
    initialState ,
    reducers : {
        setTodoInput : (state, action: PayloadAction<string | number>) => {
            return {
                ...state,
                todoInput : action.payload,
            }
        },

        addCheckBoxTodo : (state) => {
            
            return {
                ...state,
                isCheckBoxTodo : [...state.isCheckBoxTodo,false]
            }
        },
        changeCheckBox : (state,action : PayloadAction<number>) => {
            let tmp : Array<boolean> = [...state.isCheckBoxTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                isCheckBoxTodo : tmp,
            }
        },
        removeCheckBox : (state) => {
            const value = state.value;
            let i=-1;
            const indexOfCheck_false : any = [];
            const newValue : any = [];
            
            state.isCheckBoxTodo.map((val,index) => {
                if (val==false) {
                    indexOfCheck_false.push(index);
                }
            }); 
            state.value.map((val,index) => {
                if (index == indexOfCheck_false[i+1]) {
                    newValue.push(val);
                    i++;
                }
            })

            return {
                ...state,
                value : newValue,
                isCheckBoxTodo : state.isCheckBoxTodo.filter((val,index) => val==false)
            }
        },
        checkAllFunction : (state) => {
            let tmp : Array<boolean> = [...state.isCheckBoxTodo];
            
            state.isCheckAll==false 
            ?
                tmp.map((val, index) => {
                    tmp[index] = !state.isCheckAll; 
                })
            :
                tmp.map((val, index) => {
                    tmp[index] = !state.isCheckAll; 
                })
            
            return {
                ...state,
                isCheckAll : !state.isCheckAll,
                isCheckBoxTodo : tmp,
            }
        },

        addTodo : (state, action: PayloadAction<string | number>) => {
            return  {
                ...state,
                value : [...state.value,action.payload]
            }
        },
        removeTodo : (state,action: PayloadAction<string | number>) => {
            return {
                ...state,
                value : state.value.filter((val,index) => index!=action.payload),
                isCheckTodo : state.isCheckTodo.filter((val,index) => index!=action.payload)
            }
        },

        addCheckEdit : (state) => {
            return {
                ...state,
                isCheckTodo : [...state.isCheckTodo,true],
            }
        },
        openEdit : (state,action: PayloadAction<number>) => {
            
            let tmp : Array<boolean> = [...state.isCheckTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                isCheckTodo : tmp,
            }
        },
        elementEdit : (state,action: PayloadAction<any>) => {
            let tmp : Array<number | string> = [...state.value];

            tmp.map((val,i) => {
                if (i == action.payload[0]) {
                    tmp[i] = action.payload[1];
                }
            })

            return {
                ...state,
                value : tmp,
            }
        },
        closeElementEdit : (state,action: PayloadAction<number>) => {
            let tmp : Array<boolean> = [...state.isCheckTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                isCheckTodo : tmp,
            }
        }
    }
})

export const {checkAllFunction,removeCheckBox,changeCheckBox,addCheckBoxTodo,closeElementEdit,elementEdit,openEdit,addCheckEdit,removeTodo,setTodoInput,addTodo} = todolistSlice.actions;

export const selectTodos = (state : RootState) => state.todolist.value;
export const inputTodos = (state : RootState) => state.todolist.todoInput;
export const isCheckTodos = (state : RootState) => state.todolist.isCheckTodo;
export const isCheckBoxTodos = (state : RootState) => state.todolist.isCheckBoxTodo;
export const isCheckAlls = (state : RootState) => state.todolist.isCheckAll;

export default todolistSlice.reducer;




