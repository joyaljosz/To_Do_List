
function get_todo_arr(){return JSON.parse(localStorage.getItem('todos')) || [];}

export {get_todo_arr};