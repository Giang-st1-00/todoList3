import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {setTodoInput } from '../../../pages/Todolist/todolistSlice';

type props = {
    value ?: string | number,
    handleChange(payload: string | number) : any,
}

export default function InputTodo({ value , handleChange } : props) {

    const dispatchTodo = useAppDispatch();

    return (
        <input 
            value={value}
            onChange={e => {
                dispatchTodo(handleChange(e.target.value))
            }}
        />
    )
}















