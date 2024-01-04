import React , {useState} from "react";

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleClick = (e) => {
        const arr = [...todos, text];
        setTodos(arr);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleKey = (e) => {
        if(e.keyCode === 13){
            handleClick();
        }
    }
    return (
        <div>
            <h1>ToDos : </h1>
            <input type="text"
            placeholder="Add a new ToDo"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKey}
            />
            &nbsp;
            <button onClick={handleClick}>Add</button>
            {
                todos.map((todo) => <li>{todo}</li>)
            }
        </div>
    )
}

export default ToDo;