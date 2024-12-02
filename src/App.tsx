import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import { Todo } from "./model";
import ShowTodo from "./Components/ShowTodo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false} ])
    }
    setTodo('')
  };

  return (
    <div className="App w-screen h-screen bg-green-200">
      <div className="flex justify-center font-bold items-center pt-10 text-4xl">
        {" "}
        <span>ToDo Project</span>
      </div>

      <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}></Input>

      <div>
        <ShowTodo todo={todo} todos={todos} setTodos={setTodos}></ShowTodo>
      </div>
    </div>
  );
};

export default App;

// let name:string;
// name='4';
// let hobbies:string[]

// hobby:hobbies =['3','4','5','6']
// let role:[number,string]
// role=[4,'6']

// let NameCheck:(name:string)=>never;

// function NameCheck(name:string) {
//   console.log(name);
// }
// NameCheck('emon')
