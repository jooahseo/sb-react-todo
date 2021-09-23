import { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css"

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTask) => {
        setTodos(todos => [...todos, { ...newTask ,id:uuid()}])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !==id))
    }
    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(({task,id} )=> {
                return <Todo
                    key={id}
                    id={id}
                    task={task}
                    removeTodo={removeTodo}
                />
            })}
        </div>
    )
}

export default TodoList;