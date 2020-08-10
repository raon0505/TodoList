import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import Classnames from 'classnames'
import './TodoListItem.css';

const TodoListItem = ({ todo, onToggle, onRemove }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={Classnames('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;