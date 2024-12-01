import React from 'react';
import { Todo } from '../model';
interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const ShowTodo: React.FC<Props> = ({todos,setTodos} ) => {
    return (
        <div>
            <h1>Emon</h1>
        </div>
    );
};

export default ShowTodo;