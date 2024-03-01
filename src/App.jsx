import { useState } from 'react';
import Todo from './components/Todo.jsx';
import './App.css';
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
function App() {

    const [todos, setTodos] = useState([
        {
            id:1,
            text: "Criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false
        },
        {
            id:2,
            text: "Ir para a escola",
            category: "Pessoal",
            isCompleted: false
        },        {
            id:3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false
        },

    ]);

    const [search, setSearch] = useState("");
    const addTodo = (text, category) => {
        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text,
                category,
                isCompleted: false,
        }];

        setTodos(newTodos);
    }
    const removeTodo = (id) => {
        const newTodos = [...todos]
        const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
        setTodos(filteredTodos);
    }
    const completeTodo = (id) => {
        const newTodos = [...todos]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
        setTodos(newTodos);
    }

    return <div className="app">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
        <div className="todo-list">
            {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>;
}

export default App
