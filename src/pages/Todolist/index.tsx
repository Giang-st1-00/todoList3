import { useTodoDispatch, useTodoSelector } from "../../redux/hooks/hooks";
import styleTodolist from "./index.module.css";
import {
  checkAllFunction,
  elementEdit,
  closeElementEdit,
  isCheckBoxTodos,
  addCheckEdit,
  isCheckTodos,
  removeTodo,
  addTodo,
  selectTodos,
  setTodoInput,
  inputTodos,
  addCheckBoxTodo,
  changeCheckBox,
  removeCheckBox,
  isCheckAlls,
  openEdit,
} from "../../redux/slice/todolistSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CheckBoxTodo } from "../../components/common/CheckBoxTodo";
import InputEnter from "../../components/common/InputEnter";
import InputTodo from "../../components/common/InputTodo";

export default function Todolist() {

  const todo = useTodoSelector(selectTodos) || [];
  const inputTodo = useTodoSelector(inputTodos);
  const isCheckTodo = useTodoSelector(isCheckTodos);
  const isCheckBoxTodo = useTodoSelector(isCheckBoxTodos);
  const isCheckAll = useTodoSelector(isCheckAlls);

  const dispatch = useTodoDispatch();

  function SupportTodo() {
    return (
      <div className={styleTodolist.supportTodo}>
        <button
          onClick={(e) => {
            dispatch(removeCheckBox());
          }}
        >
          Clear completed
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className={styleTodolist.title}>TODOS</div>

        <div className={styleTodolist.row}>
          <div className={styleTodolist.span_all}>
            <CheckBoxTodo
              className={styleTodolist.checkbox_todo}
              state={isCheckAll}
              useDispatch={useTodoDispatch}
              handleChangeCheckBox={checkAllFunction}
            />
            All
          </div>

          <InputEnter value={inputTodo} handleChange={setTodoInput} />

          <button
            className={styleTodolist.button}
            onClick={() => {
              dispatch(addCheckEdit());
              dispatch(addCheckBoxTodo());
              dispatch(addTodo(inputTodo));
              dispatch(setTodoInput(""));
            }}
          >
            ADD
          </button>
        </div>

      <ul className={styleTodolist.ul}>
        {todo.map((value: any, index: number) => {
          return (
            <div className={styleTodolist.todo_element}>
              <CheckBoxTodo
                className={styleTodolist.checkbox_todo}
                index={index}
                state={isCheckBoxTodo[index]}
                handleChangeCheckBox={changeCheckBox}
                useDispatch={useTodoDispatch}
              />

              <InputTodo 
                index={index}
                className={`${styleTodolist.todo_element_input}`+` `+`${styleTodolist.todo_element_input}_${index}`} 
                value={value}
                isCheckTodo={isCheckTodo[index]}
                useDispatch={useTodoDispatch}
                handleDoubleClick={openEdit}
                handleOnBlur={closeElementEdit}
                elementEdit={elementEdit}
              />

              <div
                className={styleTodolist.todo_element_icon}
                onClick={() => {
                  dispatch(removeTodo(index));
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          );
        })}
      </ul>

      <SupportTodo />
    </div>
  );
}
