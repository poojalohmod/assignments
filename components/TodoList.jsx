import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const toggleTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 flex gap-2">
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a todo"
        />
        <Button onClick={addTodo}>Add</Button>
      </Card>

      {todos.map((t, i) => (
        <Card key={i} className="p-2 flex items-center gap-2">
          <Checkbox
            checked={t.completed}
            onCheckedChange={() => toggleTodo(i)}
          />
          <span className={t.completed ? "line-through" : ""}>{t.text}</span>
        </Card>
      ))}
    </div>
  );
}
