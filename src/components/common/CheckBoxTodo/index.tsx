
type CheckBoxTodoProps = {
  index ?: number;
  className: string;
  state: boolean;
  useDispatch() : any,
  handleChangeCheckBox(state?: number): any;
}

export function CheckBoxTodo({
  index,
  className = "",
  state,
  useDispatch,
  handleChangeCheckBox,
}: CheckBoxTodoProps) {
  const dispatch = useDispatch();

  return (
      <input
        className={className}
        type="checkbox"
        checked={state}
        onClick={(e) => {
          dispatch(handleChangeCheckBox(index));
        }}
      />
  );
}
