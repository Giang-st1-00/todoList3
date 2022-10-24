import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TodosState } from "../../model/Todo";

const initialState : TodosState = {
    value : [],
    todoInput : '',
    checkTodo : [],
    checkBoxTodo : [],
    checkAll : false,
}

export const todolistSlice = createSlice({
    name : 'todolist',
    initialState ,
    reducers : {
        //handle input
        setTodoInput : (state, action: PayloadAction<string | number>) => {
            return {
                ...state,
                //chỉ cần ghi todoInput , k cần state.todoInput vì typescript 
                todoInput : action.payload,
            }
        },

        //handle check box todo
        addCheckBoxTodo : (state) => {
            
            return {
                ...state,
                checkBoxTodo : [...state.checkBoxTodo,false]
            }
        },
        changeCheckBox : (state,action : PayloadAction<number>) => {
            let tmp : Array<boolean> = [...state.checkBoxTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                checkBoxTodo : tmp,
            }
        },
        removeCheckBox : (state) => {
            const value = state.value;
            let i=-1;
            const indexOfCheck_false : any = [];
            const newValue : any = [];
            
            state.checkBoxTodo.map((val,index) => {
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
                checkBoxTodo : state.checkBoxTodo.filter((val,index) => val==false)
            }
        },
        checkAllFunction : (state) => {
            let tmp : Array<boolean> = [...state.checkBoxTodo];
            
            state.checkAll==false 
            ?
                tmp.map((val, index) => {
                    tmp[index] = !state.checkAll; 
                })
            :
                tmp.map((val, index) => {
                    tmp[index] = !state.checkAll; 
                })
            
            return {
                ...state,
                checkAll : !state.checkAll,
                checkBoxTodo : tmp,
            }
        },

        //handle todo
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
                checkTodo : state.checkTodo.filter((val,index) => index!=action.payload)
            }
        },

        //handle edit
        addCheckEdit : (state) => {
            return {
                ...state,
                checkTodo : [...state.checkTodo,true],
            }
        },
        openEdit : (state,action: PayloadAction<number>) => {
            
            let tmp : Array<boolean> = [...state.checkTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                checkTodo : tmp,
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
            let tmp : Array<boolean> = [...state.checkTodo];
            
            tmp.map((val,index) => {
                if (index == action.payload) {
                    tmp[index] = !val;
                }
            })

            return {
                ...state,
                checkTodo : tmp,
            }
        }
    }
})

export const {checkAllFunction,removeCheckBox,changeCheckBox,addCheckBoxTodo,closeElementEdit,elementEdit,openEdit,addCheckEdit,removeTodo,setTodoInput,addTodo} = todolistSlice.actions;

export const selectTodos = (state : RootState) => state.todolist.value;
export const inputTodos = (state : RootState) => state.todolist.todoInput;
export const checkTodos = (state : RootState) => state.todolist.checkTodo;
export const checkBoxTodos = (state : RootState) => state.todolist.checkBoxTodo;
export const checkAlls = (state : RootState) => state.todolist.checkAll;

export default todolistSlice.reducer;




