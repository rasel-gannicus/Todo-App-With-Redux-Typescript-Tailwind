

const TodoContainer = () => {
    return (
        <div>
            <div className="my-5">
                <button className="border-2 px-4 me-3 rounded-sm py-2">Add Todo</button>
                <button className="border-2 px-4 me-3 rounded-sm py-2">Filter</button>
            </div>
            <div>
                <div className="flex justify-between bg-white px-4 mx-4 rounded-sm py-4 font-semibold text-slate-600 ">
                    <input type="radio" name="" id="" />
                    <p>Todo title</p>
                    <p>Time</p>
                    <p>Description</p>
                    <div className="">
                        <button className="border-2  px-3 rounded-sm mx-1 hover:bg-slate-400 hover:text-white">Delete</button>
                        <button className="border-2  px-3 rounded-sm mx-1 hover:bg-slate-400 hover:text-white">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;