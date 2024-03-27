import { useState } from "react";
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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useAppDispatch } from "@/Redux/hook";
import { addTodo } from "@/Redux/features/todo/todo";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormData) => {
    e.preventDefault();
    console.log({title, desc});
    dispatch(addTodo({title, description:desc}))
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
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="desc" className="text-right">
            Description
          </Label>
          <Input
            onBlur={(e) => setDesc(e.target.value)}
            id="desc"
            className="col-span-3"
          />
        </div>
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
