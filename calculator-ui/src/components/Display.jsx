import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  background-color: #333;
  color: white;
  text-align: right;
  padding: 15px;
  font-size: 2rem;
  border-radius: 8px 8px 0 0;
  height: ${(props) => (props.$expandDisplay ? '5rem' : '3rem')}; // Use a safe prop name
  transition: height 0.3s ease, background-color 0.3s ease;

  .value {
    display: block;
    word-wrap: break-word;
  }

  .active-value {
    color: #ccc;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    display: ${(props) => (props.$expandDisplay ? 'block' : 'none')}; // Use a safe prop name
  }
`;

const Display = ({ value, expandDisplay, inputRecord }) => (
  <StyledDisplay $expandDisplay={expandDisplay}> 
    {expandDisplay && <span className="active-value">{inputRecord || ' '}</span>}
    <span className="value" data-testid="display-value">{value || '0'}</span>
  </StyledDisplay>
);

export default Display;
