import './CreateTodo.css'
import { useState } from 'react';

const CreateTodo = (props) => {
   const [getInput, setInput] = useState('');
    const eventHandler = (event) => {
        event.preventDefault();
        const data = {
            id:Math.floor(Math.random() * 100)+1,
            title: getInput
        }
        props.onCreateTodo(data)
        setInput('')
    }
    const inputHandler = (event) => {
        setInput(event.target.value)
        console.log(getInput)
    }
 
    
    return (
        <div >
            <form className='form-create' onSubmit={eventHandler}>
                <input type="text" value={getInput} onChange={inputHandler} />
                <button type="submit">Kirim</button>
            </form>
        </div>
    )
}

export default CreateTodo;