import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useAppDispatch } from "@/Redux/hook";
import { addTodo } from "@/Redux/features/todo/todo";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // --- dropdown menu for filter
  const [priority, setPriority] = useState("mid");

  // --- creating id with random string
  function generateRandomString(length : number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(e.target.title.value);
    setDesc(e.target.desc.value);
    console.log({ title, desc, priority });
    dispatch(addTodo({ title, description: desc, priority, id : generateRandomString(10) }));
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-center">Add a Todo</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> */}
      </DialogHeader>
      <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            onBlur={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="desc" className="text-right">
            Description
          </Label>
          <Input
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            name="desc"
            className="col-span-3"
          />
        </div>

        {/* --- Dropdown Menu For Filter start --- */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor=""></label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-teal-500 mx-auto w-fit">Priority</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-blue-600">
                Select Priority
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={priority}
                onValueChange={setPriority}
                defaultValue={"mid"}
              >
                <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mid">Mid</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* --- Dropdown Menu For Filter end --- */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default AddTodoModal;
