import { useTodoDispatch, useTodoSelector } from "../../../app/hooks";
import { checkAllFunction } from "../../../pages/Todolist/todolistSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

type props = {
  className?: string;
  isCheckAlls?: boolean;
  useDispatch() : any;
};

export default function CheckAllTodo({
  className = "",
  isCheckAlls = false,
  useDispatch
}: props) {
  const dispatch = useDispatch();

  return (
    <label>
      <input
        type="checkbox"
        onClick={(e) => dispatch(checkAllFunction())}
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
