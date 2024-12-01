import React from 'react';
interface props {
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleSubmit:(e: React.FormEvent)=>void
}

const Input = ({todo,setTodo,handleSubmit} :props) => {
    
    return (
        <div>
            <div className=' '>
               <form onSubmit={handleSubmit} className='text-4xl justify-center pt-10 flex'>
               <input value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter a Text' type="text" className='rounded-l-lg placeholder:text-center' />
                <button type='submit' className='btn px-2 py-2 bg-green-600 rounded-r-lg text-white'> ADD</button>
               </form>
            </div>
        </div>
    );
};

export default Input;