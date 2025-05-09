import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 md:px-6 lg:px-8">
            <div className="w-[759px]  h-[742px] p-5  border border-gray-200 rounded-xl shadow-sm bg-white">
                <Header />
                <AddTaskForm />
                <TaskList />
            </div>
        </div>

    );
}

export default Home;
