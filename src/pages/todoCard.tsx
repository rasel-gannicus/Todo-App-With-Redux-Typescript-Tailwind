import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { Button } from "@/components/ui/button";

const TodoCard = ({...todo}) => {

  console.log(todo);
  return (
    <div className="flex justify-between items-center bg-white px-4 mx-4 rounded-sm py-4 font-semibold text-slate-700  border-4 border-slate-400-700">
      <input type="checkbox" checked={todo.isCompleted} className="default:ring-8" />
      <p>{todo.title || 'Title'}</p>
      <p>{todo.priority.toUpperCase()}</p>
      <p>{todo.description || 'Description'}</p> 
      <p className={`${todo.isCompleted == true ? 'text-green-700' : 'text-slate-400'}`}>{todo.isCompleted == true ? 'Completed' : 'Pending'}</p>
      <div className="">
        <Button className="mx-1 hover:bg-red-600">
          <DeleteButton />
        </Button>
        <Button className=" hover:bg-teal-800">
          <EditButton />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
