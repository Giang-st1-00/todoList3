
export interface TodosState {
    value : Array<number | string>;
    todoInput : string | number;
    checkTodo : Array<boolean>;
    checkBoxTodo : Array<boolean>; 
    checkAll : boolean;
}