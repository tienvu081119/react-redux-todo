import * as types from './../constants/ActionType'
export const listAll = () =>{
    return {
        type: types.LIST_ALL
    }
};

export const addToDo = (todo) =>{
    return {
        type: types.ADD_TODO,
        todo
    }
}