import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { checkAllFunction } from "../../../pages/Todolist/todolistSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

type props = {
  className?: string;
  isCheckAlls?: boolean;
};

export default function CheckAllTodo({
  className = "",
  isCheckAlls = false,
}: props) {
  const dispatchTodo = useAppDispatch();

  return (
    <label>
      <input
        type="checkbox"
        onClick={(e) => dispatchTodo(checkAllFunction())}
        style={{
          width: "20px",
          height: "20px",
          margin: "0 20px 0 0",
        }}
        checked={isCheckAlls}
      />
    </label>
  );
}
