import React from 'react';
import styled from 'styled-components';

const ControlPanelWrapper = styled.div`
    flex: 1;  
    display: flex;  
    flex-direction: row;  
    justify-content: space-between; 
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 25px;
    width: 100%;
`;

const ControlPanel = ({ children }) => (
    <ControlPanelWrapper>
        {children}
    </ControlPanelWrapper>
);

export default ControlPanel;
