import * as types from './../constants/ActionType';

let getNextId =(todos)=>{
    if (todos.length === 0) {
      return 1;
    }
    let ids = todos.map(todo => todo.id);
    return Math.max(...ids) + 1;
}

let data = JSON.parse(localStorage.getItem("todos"));
let initialState = data ? data: [];
let myReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case types.LIST_ALL:
            return state;
        case types.ADD_TODO:   
            let newToDo = {
                id: getNextId(state),
                description: action.todo,
                status: 'uncompleted'
            }     
            state.push(newToDo);
            localStorage.setItem('todo',JSON.stringify(state));
            return [...state];     
        default: return state;
    }
}
export default myReducer;

