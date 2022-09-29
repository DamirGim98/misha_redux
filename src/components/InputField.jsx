import React from 'react';

const InputField = ({text, textHandler, addTodo}) => {
    return (
        <label>
            <input value={text} onChange={textHandler}/>
            <button onClick={addTodo}>Add Todo</button>
        </label>
    );
};

export default InputField;