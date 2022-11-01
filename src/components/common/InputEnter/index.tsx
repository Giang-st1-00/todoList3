import { useTodoDispatch, useTodoSelector } from '../../../redux/hooks/hooks';
import {setTodoInput } from '../../../redux/slice/todolistSlice';

type InputTodoProps = {
    value ?: string | number,
    handleChange(payload: string | number) : any,
}

export default function InputTodo({ value , handleChange } : InputTodoProps) {

    const dispatchTodo = useTodoDispatch();

    return (
        <input 
            value={value}
            onChange={e => {
                dispatchTodo(handleChange(e.target.value))
            }}
        />
    )
}















