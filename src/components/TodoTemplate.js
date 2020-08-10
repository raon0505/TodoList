import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({ children }) => {
    return (
        <section className="background">
            <div className="title dark-primary"><h1 className="on-background">일정관리</h1></div>
            <div className="content">{children}</div>
        </section>
    );
};

export default TodoTemplate;