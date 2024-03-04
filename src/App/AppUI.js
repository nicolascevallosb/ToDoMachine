import React from 'react';
import { Counter } from '../Counter';
import { SearchBar } from '../SearchBar';
import { ToDoList } from '../ToDoList';
import { Item } from '../Item';
import { CreateItem } from '../CreateItem';
import { ItemsLoading } from '../ItemsLoading';
import { ItemsError } from '../ItemsError';
import { ItemsEmpty } from '../ItemsEmpty';
import { ItemContext } from '../ItemContext';
import { Modal } from '../Modal';
import { ItemForm } from '../ItemForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
    } = React.useContext(ItemContext);

    return (
        <>
            <Counter />
            <SearchBar />

            <ToDoList>
                {loading && <ItemsLoading/>}
                {error && <ItemsError/>}
                {(!loading && searchedTasks.length === 0) && <ItemsEmpty/>}
                {searchedTasks.map(task => (
                <Item
                    key={task.text}
                    text={task.text}
                    completed={task.completed}
                    onComplete={() => completeTask(task.text)}
                    onDelete={() => deleteTask(task.text)}
                />
                ))}
            </ToDoList>

            <CreateItem
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <ItemForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };