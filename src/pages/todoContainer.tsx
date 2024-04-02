import AddTodoModal from "@/components/AddTodoModal";
import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TodoCard from "./todoCard";
import { useAppSelector } from "@/Redux/hook";

const TodoContainer = () => {
  const todos = useAppSelector(state => state.todo.todos);
  return (
    <div>
      <div className="my-5 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-2" variant="outline">
              Add Todo
            </Button>
          </DialogTrigger>
          <AddTodoModal />
        </Dialog>
        <button className="border-2 px-4 me-3 rounded-sm py-2">Filter</button>
      </div>
      <div>
        {
          todos.map(todo=><TodoCard {...todo} />)
        }
      </div>
    </div>
  );
};

export default TodoContainer;
