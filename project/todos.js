import { displayTodos } from './displayTodos.js';

async function fetchTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
        displayTodos(todos.slice(0, 10)); // show first 10 for clarity
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

fetchTodos();
