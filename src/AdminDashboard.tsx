import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

// If you're not using these, remove them
const client = generateClient<Schema>();

// Define the props type
interface AdminDashboardProps {
  user?: { username: string }; // Make user optional
  signOut?: () => void;  // Make signOut optional
}

function AdminDashboard({ user, signOut }: AdminDashboardProps) {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // If you are not using useEffect and client, remove them or use them properly
  useEffect(() => {
    const subscription = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });

    return () => subscription.unsubscribe();
  }, []);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      client.models.Todo.create({ content });
    }
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  // Fallback if user or signOut is undefined
  return (
    <main>
      <h1>{user?.username ?? 'Unknown'}'s todos</h1> {/* Optional chaining and fallback for username */}
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map(todo => (
          <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/">Review next step of this tutorial.</a>
      </div>
      <button onClick={signOut ?? (() => {})}>Sign out</button> {/* Fallback for signOut */}
    </main>
  );
}

export default AdminDashboard;
