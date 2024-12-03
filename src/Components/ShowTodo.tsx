import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Todo } from "../model";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
interface Props {
  todo:string
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const ShowTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const[edit,setEdit]=useState<boolean>(false)
  console.log(edit);
  const[editTodo,setEditTodo]=useState<string>('')

  
const handleDone=(id:number)=>{
  setTodos(todos.map(todo=> todo.id === id ? {...todo, isDone:!todo.isDone}:todo ))
}
const handleDelete= (id:number)=>{

  setTodos(todos.filter(todo=>todo.id !== id))

}



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:px-20 justify-evenly mt-10 gap-9">
      {todos.map((todo) => <div className="flex justify-between items-center gap-12 bg-green-700 text-white px-5 py-4 text-3xl rounded-xl">
        {
          edit?(
             <input type="text" />
          ):
          (
            <h1>{todo.isDone? <h1 className="line-through">{todo.todo}</h1>:<h1>{todo.todo}</h1> }

        </h1>
          )
        }
   
   <div className="flex gap-3">
  <button onClick={()=>{
    if(!edit && !todo.isDone){
      
      setEdit(!edit)
    }
  }}> <CiEdit/></button>
   <button  onClick={()=>handleDelete(todo.id)}><MdDelete /></button>
   <button onClick={()=>handleDone(todo.id)}><IoMdCheckmark /></button>
   
   </div>
      </div>)}
    </div>
  );
};

export default ShowTodo;
