import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><FaCircleCheck className="Check" /></span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelete}><IoClose /></span>
        </li>
    );
}

export { TodoItem };