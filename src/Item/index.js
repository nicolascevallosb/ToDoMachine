import { CompleteIcon } from '../ItemIcon/CompleteIcon';
import { DeleteIcon } from '../ItemIcon/DeleteIcon';
import './Item.css';

function Item(props) {
    return(
      <li className="item">

        <CompleteIcon
          completed = {props.completed}
          onComplete={props.onComplete}
        />

        <p className={`item-p ${props.completed && 'item-p-complete'}`}>
          {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
        />

      </li>
    );
}

export { Item };