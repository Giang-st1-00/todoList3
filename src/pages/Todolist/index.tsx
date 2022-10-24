import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styleTodolist from './index.module.css';
import {isCheckBoxTodos , elementEdit,openEdit, addCheckEdit, isCheckTodos , removeTodo,addTodo,selectTodos ,setTodoInput,inputTodos, closeElementEdit, addCheckBoxTodo, changeCheckBox, removeCheckBox, isCheckAlls, checkAllFunction } from './todolistSlice';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Todolist() {

    const todo = useAppSelector(selectTodos) || [];
    const inputTodo = useAppSelector(inputTodos);   
    const isCheckTodo = useAppSelector(isCheckTodos);
    const isCheckBoxTodo = useAppSelector(isCheckBoxTodos);
    const isCheckAll = useAppSelector(isCheckAlls);

    const dispatchTodo = useAppDispatch();

    function handleInputElement(index : number) {
        const todo_element_input = document.querySelector(`.${styleTodolist.todo_element_input}_${index}`)
        
        if (todo_element_input != null) {
            todo_element_input.setAttribute("style", 
                "color:red; border: none;"
            );
        }
    }

    function SupportTodo() {
        return (
            <div className={styleTodolist.supportTodo}>
                <button onClick={e => {
                    dispatchTodo(removeCheckBox())
                }}>Clear completed</button>
            </div>
        )
    }
  
    return (
        <div>
            <div className={styleTodolist.title}>TODOS</div>

            <div className={styleTodolist.row}>
                    <span
                        className={styleTodolist.span_all
                    }>
                        <input 
                            type='checkbox' 
                            onClick={e => 
                                dispatchTodo(checkAllFunction())
                            }
                            style={{
                                width : '20px',
                                height : '20px',
                                margin : '0 20px 0 0',
                            }}
                            checked={isCheckAll}

                        />
                        All
                    </span>
                    
                    <input 
                        value={inputTodo}
                        onChange={e => {
                            dispatchTodo(setTodoInput(e.target.value))
                        }}
                        // autoFocus={true}

                    />
                    <button 
                        className={styleTodolist.button}
                        onClick={() => {
                            dispatchTodo(addCheckEdit())
                            dispatchTodo(addCheckBoxTodo())
                            dispatchTodo(addTodo(inputTodo))
                            dispatchTodo(setTodoInput(''))
                        }}
                    >
                        ADD
                    </button>
            </div>

            <ul className={styleTodolist.ul}>
                {
                    todo.map((value: any,index: number) => {
                        return (
                            <div className={styleTodolist.todo_element}>
                                <input 
                                    className={styleTodolist.checkbox_todo} 
                                    type='checkbox' 
                                    checked={isCheckBoxTodo[index]}
                                    onClick={e => {
                                        dispatchTodo(changeCheckBox(index))
                                    }}
                                />
                                <input 
                                    className={`${styleTodolist.todo_element_input} ${styleTodolist.todo_element_input}_${index}`} 
                                    value={value} 
                                    readOnly={isCheckTodo[index]}
                                    onDoubleClick={e => {
                                        e.preventDefault();
                                        handleInputElement(index)
                                        dispatchTodo(openEdit(index))
                                        const todo_element_input1 = document.querySelector(`.${styleTodolist.todo_element_input}_${index}`)
                                        if (todo_element_input1 != null) {
                                            todo_element_input1.setAttribute("style", 
                                                "outline: auto;"
                                            );
                                        }
                                    }}
                                    onBlur={e => {
                                            if (isCheckTodo[index] == false) {
                                                console.log(12333);
                                                
                                            dispatchTodo(closeElementEdit(index))
                                            const todo_element_input1 = document.querySelector(`.${styleTodolist.todo_element_input}_${index}`)
                                        
                                            if (todo_element_input1 != null) {
                                                todo_element_input1.setAttribute("style", 
                                                    "outline: none;"
                                                );
                                            }
                                        }
                                    }}

                                    onChange={e => 
                                        dispatchTodo(elementEdit([index,e.target.value]))
                                    }
                                    
                                    // autoFocus
                                />
                                
                                <div 
                                    className={styleTodolist.todo_element_icon}
                                    onClick={
                                        () => {
                                          dispatchTodo(removeTodo(index))
                                        }
                                    }
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </ul>
            
            <SupportTodo />
        </div>
    )
}