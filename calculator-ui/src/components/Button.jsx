import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 15px;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #e0e0e0;
        transform: translateY(-2px);
    }

    &.equals {
        grid-column: span 2;
        background-color: #007BFF;
        color: white;
            
        &:hover {
            background-color: #0056b3;
        }
    }

    &.operator {
        background-color: #ff8c00;
        color: white;

        &:hover {
            background-color: #e07b00;
        }
    }

    &.clear {
        background-color: #dc3545;
        color: white;

        &:hover {
            background-color: #c82333;
        }
    }
`;

const Button = ({ label, onClick, className }) => {
    return (
        <StyledButton
            onClick={onClick}
            className={className}
            data-testid={`button-${label}`}
        >
            {label}
        </StyledButton>
    );
};

export default Button;
