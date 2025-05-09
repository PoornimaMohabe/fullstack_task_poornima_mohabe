import React, { useEffect, useState } from 'react';
import axios from "axios";
import socket from "../socket";
import '../App.css'
import { BASE_URL } from '../utils/url';


function TaskList() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/fetchAllTasks`);
            setTasks(res.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();

        socket.on("taskListUpdated", (updatedList) => {
            setTasks(updatedList);
        });

        return () => {
            socket.off("taskListUpdated");
        };
    }, []);

    return (
        <div className=''>
            <h2 className="text-[24px] h-[36px] w-[87px] mt-10 sm:text-[30px] font-bold mb-2 leading-[1]">Notes</h2>
            <div className="h-[400px] overflow-y-auto pr-1 border-t border-gray-200 scrollbar scrollbar-thin
       scrollbar-thumb-[#A4521D] scrollbar-track-transparent">
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-sm">No tasks added yet.</p>
                ) : (
                    <ul className="divide-y divide-gray-200 text-[20px] sm:text-[30px]">
                        {tasks.map((task, idx) => (
                            <li key={idx} className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] font-normal py-4">
                                {task}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TaskList;
