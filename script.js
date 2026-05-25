class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(newTodo) {
    this.todo.push(newTodo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
class Todo {
  constructor(id, todo, completed) {
    this.id = id;
    this.todo = todo;
    this.completed = completed;
  }

  toggleTodo() {
    this.completed = !this.completed;
  }

  editTodo(newTodo) {
    this.todo = newTodo;
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  const data = await fetchData();
  const todos = data.todos;
});

async function fetchData() {
  try {
    const res = await fetch('https://dummyjson.com/todo');
    if (!res.ok) {
      throw new Error(`Status: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}
