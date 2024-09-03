import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';
import axios from 'axios';
import { toast } from 'react-toastify';

jest.mock('axios');
jest.mock('react-toastify', () => ({
    toast: {
        error: jest.fn(),
    },
}));


describe('Normal Cases', () => {

    test('should handle basic arithmetic operations', async () => {
        axios.get.mockResolvedValueOnce({ data: 3 });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-1'));
        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('3');
    });

    test('should handle decimal numbers', async () => {
        axios.get.mockResolvedValueOnce({ data: 4.5 });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-.'));
        fireEvent.click(screen.getByTestId('button-5'));
        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('4.5');
    });

    test('should handle percentage operation', async () => {
        axios.get.mockResolvedValueOnce({ data: 0.5 });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-5'));
        fireEvent.click(screen.getByTestId('button-0'));
        fireEvent.click(screen.getByTestId('button-%'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('0.5');
    });

});

describe('Edge Cases', () => {

    test('should handle division by zero', async () => {
        axios.get.mockResolvedValueOnce({ data: 'Infinity' });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-5'));
        fireEvent.click(screen.getByTestId('button-÷'));
        fireEvent.click(screen.getByTestId('button-0'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('Infinity');
    });

    test('should not allow multiple operators in a row', () => {
        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-5'));
        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-+'));

        expect(toast.error).toHaveBeenCalledWith("Cannot enter operator after another operator!", expect.any(Object));
    });

    test('should start input with a decimal point', async () => {
        axios.get.mockResolvedValueOnce({ data: 1.5 });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-.'));
        fireEvent.click(screen.getByTestId('button-5'));
        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-1'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('1.5');
    });

});

describe('Error Cases', () => {

    test('should not allow multiple decimals in a single operand', () => {
        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-.'));
        fireEvent.click(screen.getByTestId('button-.'));

        expect(toast.error).toHaveBeenCalledWith("Cannot enter multiple decimals in single operand!", expect.any(Object));
    });

    test('should not allow operation without sufficient operands', () => {
        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(toast.error).toHaveBeenCalledWith("Cannot enter operator without an operand!", expect.any(Object));
    });

    test('should handle invalid input sequences', () => {
        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-+'));

        expect(toast.error).toHaveBeenCalledWith("Cannot enter operator without an operand!", expect.any(Object));
    });

});

describe('Performance Cases', () => {

    test('should handle rapid successive inputs correctly', async () => {
        axios.get.mockResolvedValueOnce({ data: 333 });

        render(<Calculator />);

        fireEvent.click(screen.getByTestId('button-1'));
        fireEvent.click(screen.getByTestId('button-1'));
        fireEvent.click(screen.getByTestId('button-1'));
        fireEvent.click(screen.getByTestId('button-+'));
        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-2'));
        fireEvent.click(screen.getByTestId('button-='));

        expect(await screen.findByTestId('display-value')).toHaveTextContent('333');
    });
});

