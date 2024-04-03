import AddTodoModal from "@/components/AddTodoModal";
import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TodoCard from "./todoCard";
import { useAppSelector } from "@/Redux/hook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const TodoContainer = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  // --- dropdown menu for filter
  const [filter, setFilter] = useState("mid")

  return (
    <div className="pb-4">
      <div className="my-5 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-2" variant="outline">
              Add Todo
            </Button>
          </DialogTrigger>
          <AddTodoModal />
        </Dialog>

        {/* --- Dropdown Menu For Filter start --- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-blue-600">Select Priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={filter}
              onValueChange={setFilter}
              defaultValue={'mid'}
            >
              <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mid">
                Mid
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* --- Dropdown Menu For Filter end --- */}

      </div>
      <div>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
