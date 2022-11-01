import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//counterSlice  => chỉ slice của counter
import todolistReducer from '../slice/todolistSlice';

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});

export type TodoDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
