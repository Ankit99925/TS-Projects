import { Itask } from "../Interfaces"
interface todoProp{
    task:Itask;
    handleDeleteTask(deltask:string):void;
}
const List = ({ task, handleDeleteTask }: todoProp) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mb-2">
      <div>
        <span className="font-medium text-gray-800">{task.task}</span>
        <span className="text-sm text-gray-500 ml-2">(Deadline: {task.deadline})</span>
      </div>
      <button
        onClick={() => handleDeleteTask(task.task)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  )
}

export default List