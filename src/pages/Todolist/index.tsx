import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styleTodolist from './index.module.css';
import {checkBoxTodos, elementEdit,openEdit, addCheckEdit,checkTodos, removeTodo,addTodo,selectTodos ,setTodoInput,inputTodos, closeElementEdit, addCheckBoxTodo, changeCheckBox, removeCheckBox, checkAlls, checkAllFunction } from './todolistSlice';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Todolist() {

    const todo = useAppSelector(selectTodos) || [];
    const inputTodo = useAppSelector(inputTodos);   
    const checkTodo = useAppSelector(checkTodos);
    const checkBoxTodo = useAppSelector(checkBoxTodos);
    const checkAll = useAppSelector(checkAlls);
    
    const dispatchTodo = useAppDispatch();

    function handleInputElement(index : number) {
        const todo_element_input = document.querySelector(`.${styleTodolist.todo_element_input}_${index}`)
        
        if (todo_element_input != null) {
            todo_element_input.setAttribute("style", 
                "color:red; border: none;"
            );
        }
    }

    //Component 
    function ShowTodo(props: any) {
        return (
            <ul className={styleTodolist.ul}>
                {
                    props.dataTodo.map((value: any,index: number) => {
                        return (
                            <div className={styleTodolist.todo_element}>
                                <input 
                                    className={styleTodolist.checkbox_todo} 
                                    type='checkbox' 
                                    checked={checkBoxTodo[index]}
                                    onClick={e => {
                                        dispatchTodo(changeCheckBox(index))
                                    }}
                                />
                                <input 
                                    className={`${styleTodolist.todo_element_input} ${styleTodolist.todo_element_input}_${index}`} 
                                    value={value} 
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
                                    onMouseOut={e => {
                                        if (checkTodo[index] == false) {
                                            dispatchTodo(closeElementEdit(index))
                                            const todo_element_input1 = document.querySelector(`.${styleTodolist.todo_element_input}_${index}`)
                                        
                                            if (todo_element_input1 != null) {
                                                todo_element_input1.setAttribute("style", 
                                                    "outline: none;"
                                                );
                                            }
                                        }
                                    }}
                                    readOnly={checkTodo[index]}
                                    onChange={e => 
                                        dispatchTodo(elementEdit([index,e.target.value]))
                                    }
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
        )
    }

    function ActionTodo() {
        return (
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
                            checked={checkAll}
                        />
                        All
                    </span>
                    
                    <input 
                        value={inputTodo}
                        onChange={e => {
                            dispatchTodo(setTodoInput(e.target.value))
                        }}
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
        )
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
            <ActionTodo />
            <ShowTodo dataTodo={todo}/>
            <SupportTodo />
        </div>
    )
}