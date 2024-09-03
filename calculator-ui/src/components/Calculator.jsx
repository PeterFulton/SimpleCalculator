import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import Display from './Display';
import ButtonPanel from './ButtonPanel';
import ControlPanel from './ControlPanel';  
import Slider from './Slider';

const CalculatorWrapper = styled.div`
    flex: 2;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 25px;
    transition: all 0.3s ease;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    gap: 20px;
    max-width: 540px;  
    margin: auto;  
`;

const Calculator = () => {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');
    const [prevInput, setPrevInput] = useState('');
    const [inputRecord, setInputRecord] = useState('');
    const [expandDisplay, setExpandDisplay] = useState(false);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [lastButtonWasEquals, setLastButtonWasEquals] = useState(false);
    const [calcPercentage, setCalcPercentage] = useState(false);

    const handleButtonClick = (value) => {
        if (['+', '-', '×', '÷'].includes(value)) {
            handleOperatorInput(value);
        } else if (value === '%') {
            handlePercentageInput();   
        } else if (value === '.') {
            handleDecimalInput();   
        } else if (value === '=') {
            calculateResult();  
        } else if (value === 'C') {
            reset();
        } else if (value === '←') {
            handleBackspace();
        } else {
            handleDigitInput(value);
        }
    };

    const handleOperatorInput = (value) => {
        if (input && !waitingForOperand) {
            if(prevInput || calcPercentage) {
                calculateResult(true);
            }else {
                setPrevInput(input);
            }
            setOperation(value);
            setWaitingForOperand(true);
            setCalcPercentage(false);
            if (lastButtonWasEquals) setLastButtonWasEquals(false);
            setInputRecord((prev) => prev + value);
        } else {
            showError(waitingForOperand ? "Cannot enter operator after another operator!" : "Cannot enter operator without an operand!");
        }
    };

    const handlePercentageInput = () => {
        if (input && !waitingForOperand) {
            if (inputRecord.slice(-1) === '%') {
                showError("Cannot enter multiple percentage signs in a row!");
                return;
            }
            if(prevInput) {
                calculateResult(true);
            }
            setOperation('%');
            setInputRecord((prev) => prev + '%');
            setCalcPercentage(true);
        } else {
            showError("Cannot calculate percentage without an operand!");
        }
    };
    

    const handleDecimalInput = () => {
        if (!input || lastButtonWasEquals) {
            if (lastButtonWasEquals) reset();
            updateInput('0.');
        } else if (!input.includes('.')) {
            updateInput('.');   
        } else {
            showError("Cannot enter multiple decimals in single operand!");
        }
    };

    const handleBackspace = () => {
        if(input && !lastButtonWasEquals && !waitingForOperand && !calcPercentage) {
            setInput(input.slice(0, -1));
            setInputRecord(inputRecord.slice(0, -1));
            setOperation('');
        }else{
            showError("Nothing to delete!");
        }
    }

    const handleDigitInput = (value) => {
        if (lastButtonWasEquals) reset();
        if (calcPercentage){
            showError("Please enter another number or operand!");
            return;
        }
        if (waitingForOperand) {
            setInput(value);
            setWaitingForOperand(false);
        } else {
            setInput((prev) => prev + value);
        }
        setInputRecord((prev) => prev + value);
    }

    const calculateResult = async (runningCalculation = false) => {
        if (operation && input && !waitingForOperand) {
            try {
                if (operation === '%') {
                    setPrevInput('0.01');
                }
                const url = `http://localhost:8080/${getOperationEndpoint(operation)}`;
                const response = await axios.get(url, {
                    params: { a: operation === '%' ? 0.01 : parseFloat(prevInput), b: parseFloat(input) },
                });
                setInput(String(response.data));
                if (runningCalculation) {
                    setPrevInput(String(response.data));
                } else {
                    reset(true);
                    setLastButtonWasEquals(true);
                }
            } catch (error) {
                const errorMessage = error.response?.data || 'Error calculating the expression';
                toast.error(errorMessage);
            }
        } else {
            showError("Complete the expression to calculate!");
        }
    };

    const getOperationEndpoint = (operation) => {
        switch (operation) {
            case '+':
                return 'add';
            case '-':
                return 'subtract';
            case '×':
                return 'multiply';
            case '%':
                return 'multiply';
            case '÷':
                return 'divide';
            default:
                return '';
        }
    };

    const updateInput = (value) => {
        setInput((prev) => prev + value);
        setInputRecord((prev) => prev + value);
    };

    const showError = (message) => {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });    
        };

    const reset = (partialReset = false) => {
        setOperation('');
        setPrevInput('');
        setWaitingForOperand(false);
        setCalcPercentage(false);
        if(!partialReset){
            setInput('');
            setInputRecord('');
            setLastButtonWasEquals(false);
        }
    };  

    return (
        <ContentWrapper>
            <CalculatorWrapper>
                <Display value={input} expandDisplay={expandDisplay} inputRecord={inputRecord}/>
                <ButtonPanel onButtonClick={handleButtonClick} currentInput={input}/>
            </CalculatorWrapper>

            <ControlPanel >
                {<Slider isChecked={expandDisplay} action={() => setExpandDisplay(prev => !prev)} label={"Display input record:"}/>}
            </ControlPanel>
        </ContentWrapper>
    );
};

export default Calculator;
