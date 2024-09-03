import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }
`;

const Label = styled.span`
  font-size: 16px;
  color: #333;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Slider = ({ isChecked, action, label }) => (
  <SliderWrapper>
    <Label>{label}</Label>
    <SliderContainer>
      <input type="checkbox" checked={isChecked} onChange={action} />
      <span className="slider"></span>
    </SliderContainer>
  </SliderWrapper>
);

export default Slider;
