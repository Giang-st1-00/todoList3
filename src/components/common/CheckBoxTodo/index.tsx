import styleTodolist from "../../../pages/Todolist/index.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeCheckBox } from "../../../pages/Todolist/todolistSlice";

type props = {
  className: string;
  state: boolean;
  handleChangeCheckBox(state: number): any;
  indexChange: number;
}

export function CheckBoxTodo({
  className = "",
  state,
  handleChangeCheckBox,
  indexChange,
}: props) {
  const dispatchTodo = useAppDispatch();

  return (
    <label>
      <input
        className={className}
        type="checkbox"
        checked={state}
        onClick={(e) => {
          dispatchTodo(handleChangeCheckBox(indexChange));
        }}
      />
    </label>
  );
}
