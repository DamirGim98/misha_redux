import './App.css';
import {useState} from 'react'
import TodoList from "./components/TodoList";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";
import InputField from "./components/InputField";

function App() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({text}));
        setText('')
    }


    const textHandler = (e) => {
        setText(e.target.value);
    }

    return (

        <div className="App">
            <InputField text={text} textHandler={textHandler} addTodo={addTask} />
           <TodoList />
        </div>);
}

export default App;
