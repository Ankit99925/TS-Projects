import { ChangeEvent, FC, useState } from 'react'
import { Itask } from './Interfaces';
import List from './components/List';
import './App.css'

const App:FC=()=> {

  const [task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0);
  const [todo,setTodo]=useState<Itask[]>([]);

  const addTask=()=>{
    const newTask={task:task,deadline:deadline}
    setTodo([...todo,newTask]);
    setTask("")
    setDeadline(0);
  

  }

  const handleTaskChange=(event:ChangeEvent<HTMLInputElement>):void=>{
   if(event.target.name ==="task"){
    setTask(event.target.value)
  }else if(event.target.name ==="deadline"){
      setDeadline(Number(event.target.value))
    }
  }
  const handleDeleteTask=(delTask:string)=>{
    setTodo(todo.filter((task)=>{
        return task.task!=delTask
    }))

  }
  

  return (
    <>
      <div className="text-4xl font-bold text-center my-4 text-blue-600">Todo App</div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleTaskChange}
            placeholder="Add your todos"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            onChange={handleTaskChange}
            placeholder="Deadline"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <div className="w-full max-w-md">
          {todo.map((task: Itask, key: number) => (
            <List key={key} task={task} handleDeleteTask={handleDeleteTask} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
