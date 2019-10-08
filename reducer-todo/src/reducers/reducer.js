const todoAdded = '';
const initialTodoList = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const initialState = {
    initialTodoList, todoAdded
}

export const ON_WRITING_TASK = 'ON_WRITING_TASK';
export const ON_ADDING_TASK = 'ON_ADDING_TASK';
export const ON_CLEAR_TASK_TO_BE_ADDED = 'ON_CLEAR_TASK_TO_BE_ADDED';  

export function reducer(state, action) {
    switch(action.type) {
        case ON_WRITING_TASK:
            return {
                ...state,
                todoAdded: action.payload,
            };
        case ON_ADDING_TASK: 
            return {
                ...state,
                initialTodoList: [...state.initialTodoList.concat(action.payload)]
            };
        case ON_CLEAR_TASK_TO_BE_ADDED: 
            return {
                ...state,
                todoAdded: action.payload,
            }
        default:
            return;
    }
}