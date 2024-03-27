import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { Button } from "@/components/ui/button";

const TodoCard = () => {
  return (
    <div className="flex justify-between items-center bg-white px-4 mx-4 rounded-sm py-4 font-semibold text-slate-700  border-4 border-slate-400-700">
      <input type="radio" name="" id="" />
      <p>Todo title</p>
      <p>Time</p>
      <p>Description</p>
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
