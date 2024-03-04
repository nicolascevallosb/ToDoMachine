import React from "react";
import './ItemForm.css'
import { ItemContext } from "../ItemContext";

function ItemForm() {
    const {
        addTask,
        setOpenModal,
    } = React.useContext(ItemContext);
    const [newItemVal, setNewItemVal] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newItemVal);
        setOpenModal(false);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewItemVal(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>What's your new task?</label>
            <textarea
                placeholder="New task..."
                value={newItemVal}
                onChange={onChange}
            />
            <div className="item-form-btn-container">
                <button
                    type="button"
                    className="item-form-btn item-form-btn-cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="item-form-btn item-form-btn-add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { ItemForm };