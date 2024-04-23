
import { set_up } from './modules/html_elements.js';
import { add_todo_to_html } from './modules/render_todos.js';
import {event_listener_to_submit} from './modules/submit_todos.js';
import {event_listener_clear} from './modules/clear_list.js';
import  "./style.css";


const main = () => {
    set_up();
    add_todo_to_html();
    event_listener_to_submit();
    event_listener_clear();
    // console.log(todo_arr)
}

main();