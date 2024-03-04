import { FaCheck as CheckSVG } from "react-icons/fa";
import { AiOutlineClose as DeleteSVG } from "react-icons/ai";
import './ItemIcon.css';

const iconTypes = {
    'check': (color) => <CheckSVG className="icon-svg" fill={color}/>,
    'delete': (color) => <DeleteSVG className="icon-svg" fill={color}/>,
}

function ItemIcon(props) {
    return(
        <span
            className={`icon-container icon-container-${props.type}`}
            onClick={props.onClick}
        >
            {iconTypes[props.type](props.color)}
        </span>
    );
}

export {ItemIcon};