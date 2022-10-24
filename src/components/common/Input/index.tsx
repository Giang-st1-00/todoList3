import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {setTodoInput } from '../../../pages/Todolist/todolistSlice';
import { InputProps } from '../../../model/Todo';


export default function Input({value} : InputProps) {

    const dispatchTodo = useAppDispatch();

    return (
        <input 
            value={value}
            onChange={e => {
                dispatchTodo(setTodoInput(e.target.value))
            }}
            // autoFocus={true}
        />
    )
}















