
export interface TodosState {
    value : Array<number | string>;
    todoInput : string | number;
    isCheckTodo : Array<boolean>;
    isCheckBoxTodo : Array<boolean>; 
    isCheckAll : boolean;
}

export interface CheckAllProps {
    className ?: string,
    isCheckAlls ?: boolean,
}

export interface InputProps {
    value ?: string | number,

}


