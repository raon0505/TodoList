import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form onSubmit={onSubmit}>
            <input className="dark-primary on-surface" placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
            <button className="primary on-primary" type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;