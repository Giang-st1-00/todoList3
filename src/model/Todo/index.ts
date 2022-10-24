
export interface TodosState {
    value : Array<number | string>;
    todoInput : string | number;
    isCheckTodo : Array<boolean>;
    isCheckBoxTodo : Array<boolean>; 
    isCheckAll : boolean;
}