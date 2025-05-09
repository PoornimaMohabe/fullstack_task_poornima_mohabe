import React, { useState } from 'react';
import socket from "../socket";
import addIcon from "../assets/images/addIcon.png"

function AddTaskForm() {
    const [task, setTask] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (task.trim()) {
            socket.emit("add", task.trim());
            setTask("");
        }
    };

    return (
        <form onSubmit={handleAdd} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-5">
            <input
                type="text"
                placeholder="New Note..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 h-[60px] sm:h-[72px] px-4 rounded-xl border border-gray-300 text-base focus:outline-none placeholder:text-[30px] placeholder:text-[#303C4DA3] 
                 placeholder:font-normal placeholder:leading-[1] 
                 placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[20px] lg:placeholder:text-[25px] xl:placeholder:text-[30px]
                 focus:border-[#A4521D] focus:ring-2 focus:ring-[#A4521D]  transition duration-200 ease-in-out"
               
            />
            <button
                type="submit"
                className="w-full sm:w-[154px] h-[60px] sm:h-[72px] rounded-xl bg-[#92400E] flex items-center justify-center gap-2 hover:bg-[#7a360e]"
            >
                <img
                    src={addIcon}
                    alt="add-icon"
                    className="w-[28px] sm:w-[36px] h-[28px] sm:h-[36px]"
                />
                <span className="text-white text-[20px] sm:text-[28px] font-bold leading-none font-['Inter']">
                    Add
                </span>
            </button>
        </form>
    );
}

export default AddTaskForm;
