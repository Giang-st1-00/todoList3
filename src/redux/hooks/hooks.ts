import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, TodoDispatch } from '../store/store';

export const useTodoDispatch = () => useDispatch<TodoDispatch>();
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector; 
















