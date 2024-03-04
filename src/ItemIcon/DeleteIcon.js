import { ItemIcon } from ".";

function DeleteIcon(props) {
    return (
        <ItemIcon  
            type = "delete"
            color = "gray"
            onClick = {props.onDelete}
        />  
    );
}

export { DeleteIcon }