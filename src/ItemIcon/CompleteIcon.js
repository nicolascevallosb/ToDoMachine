import { ItemIcon } from ".";

function CompleteIcon(props) {
    return (
        <ItemIcon 
            type = 'check'
            color = {props.completed ? 'green' : 'gray'}
            onClick = {props.onComplete}
        />
    );
}

export { CompleteIcon }