const Todo = ({id, task, removeTodo}) => {
    const remove = (e) =>{
        removeTodo(id);
        e.target.remove();
    }
    return (
        <div>
            {task}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;