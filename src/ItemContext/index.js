import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ItemContext = React.createContext();

function ItemProvider({ children }) {

    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error,
    } = useLocalStorage('TASKS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTasks = tasks.filter(task => (task.completed)).length;
    const totalTasks = tasks.length;
    const searchedTasks = tasks.filter(task => (task.text.toLowerCase().includes(searchValue)));

    const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
            text,
            completed: false,
        });
        saveTasks(newTasks);
    };

    const completeTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => (task.text === text));
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        saveTasks(newTasks);
    };

    const deleteTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => (task.text === text));
        newTasks.splice(taskIndex, 1);
        saveTasks(newTasks);
    };

    return (
        <ItemContext.Provider value={{
            loading,
            error,
            completedTasks,
            totalTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            addTask,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
        }}>
            {children}
        </ItemContext.Provider>
    );
}

export { ItemContext, ItemProvider };