export function displayTodos(data) {
    const container = document.getElementById("todosContainer");
    container.innerHTML = "";
    data.forEach(todo => {
        const item = document.createElement("p");
        item.textContent = `${todo.id}. ${todo.title} - ${todo.completed ? "✅" : "❌"}`;
        container.appendChild(item);
    });
}
