import './Todo.css'
import CreateTodo from '../createTodo/CreateTodo'
import { useState } from 'react'

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id:1, title:'eat'},
        {id:2, title:'sleep'},
        {id:3, title:'code'},
    ])
const pushTodo = (event) => {
    setTodos(getTodos.concat(event))
}
    
    return (
        <div className='App'>
            <h3> Todolist </h3>
            <CreateTodo onCreateTodo={pushTodo}/>
            <ul>
                {
                    getTodos.map(h => 
                        <li key={h.id}>{h.title}</li>
                    )
                    
                }
            </ul>
        </div>
        
    )
}

export default Todo;