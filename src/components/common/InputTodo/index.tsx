import styleTodolist from "../../../pages/Todolist/index.module.css";

type InputTodoProps = {
  index: number;
  className?: string | undefined;
  value?: string | undefined;
  isCheckTodo?: boolean;
  useDispatch(): any;
  handleDoubleClick(index: number): any;
  handleOnBlur(index: number) : any;
  elementEdit([]:any) : any;
};

export default function InputTodo({
  index,
  className,
  value,
  isCheckTodo,
  useDispatch,
  handleDoubleClick,
  handleOnBlur,
  elementEdit
}: InputTodoProps) {
  const dispatch = useDispatch();

  

  function handleInputElement(index: number) {
    const todo_element_input = document.querySelector(
      `.${styleTodolist.todo_element_input}_${index}`
    );

    if (todo_element_input != null && isCheckTodo == true) {
      todo_element_input.setAttribute("style", "border: none;outline: auto;");
    } else if (todo_element_input != null && isCheckTodo == false) {
      todo_element_input.setAttribute("style", "outline: none;");
    }
  }

  return (
    <input
        className={className}
        value={value}
        readOnly={isCheckTodo}
        onDoubleClick={(e) => {
            e.preventDefault();
            handleInputElement(index);
            dispatch(handleDoubleClick(index));
        }}
        onBlur={(e) => {
            if (isCheckTodo == false) {
              handleInputElement(index);
              dispatch(handleOnBlur(index));
            }
        }}
        onChange={(e) =>
            dispatch(elementEdit([index,e.target.value]))
        }
    />
  );
}
