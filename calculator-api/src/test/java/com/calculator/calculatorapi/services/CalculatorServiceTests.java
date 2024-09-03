package com.calculator.calculatorapi.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class CalculatorServiceTests {

    private final CalculatorService calculatorService = new CalculatorService();

    @Test
    public void testAddition() {
        assertEquals(3.0, calculatorService.add(1.0, 2.0));
        assertEquals(-1.0, calculatorService.add(2.0, -3.0));
    }

    @Test
    public void testSubtraction() {
        assertEquals(1.0, calculatorService.subtract(2.0, 1.0));
        assertEquals(3.0, calculatorService.subtract(2.0, -1.0));
    }

    @Test
    public void testMultiplication() {
        assertEquals(8.0, calculatorService.multiply(2.0, 4.0));
        assertEquals(-8.0, calculatorService.multiply(2.0, -4.0));
        assertEquals(0.0, calculatorService.multiply(0, 1000));
    }

    @Test
    public void testDivision() {
        assertEquals(2.0, calculatorService.divide(4.0, 2.0));
        assertEquals(-2.0, calculatorService.divide(4.0, -2.0));
    }

    @Test
    public void testDivisionByZero() {
        Exception exception = assertThrows(ArithmeticException.class, () -> calculatorService.divide(1.0, 0.0));
        assertEquals("Division by zero is not allowed.", exception.getMessage());
    }

    @Test
    public void testAddLargeNumbers() {
        double largeNumber = Double.MAX_VALUE;
        assertEquals(Double.POSITIVE_INFINITY, calculatorService.add(largeNumber, largeNumber));
    }

    @Test
    public void testDivideByVerySmallNumber() {
        assertEquals(1.0E10, calculatorService.divide(1, 1.0E-10));
    }
}