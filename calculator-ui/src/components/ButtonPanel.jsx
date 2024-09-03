import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
    // background-color: #F9F9F9;
    background-color: #7888AA;
    border-radius: 0 0 8px 8px;
`;

const ButtonPanel = ({ onButtonClick, currentInput }) => {
    const buttons = [
        { label: 'C', className: 'clear' },
        { label: '←' },
        { label: '%'},
        { label: '÷' , className: 'operator'},
        { label: '7' }, { label: '8' }, { label: '9' },
        { label: '×', className: 'operator' },
        { label: '4' }, { label: '5' }, { label: '6' },
        { label: '-', className: 'operator' },
        { label: '1' }, { label: '2' }, { label: '3' },
        { label: '+', className: 'operator' },
        { label: '0'}, { label: '.' }, { label: '=', className: 'equals' },
    ];

    return (
        <ButtonsGrid>
            {buttons.map((btn, index) => (
                <Button
                    key={index}
                    label={btn.label}
                    onClick={() => onButtonClick(btn.action || btn.label)}
                    className={btn.className || ''}
                />
            ))}
        </ButtonsGrid>
    );
};

export default ButtonPanel;
