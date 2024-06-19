"use client";
import React, { useState } from 'react';
import './Dropdown.css';

const DropdownComponent = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {title} <span className={`caret ${isOpen ? 'open' : ''}`}>&#9660;</span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}</div>
    );
};

export default DropdownComponent;
