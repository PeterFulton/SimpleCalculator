package com.calculator.calculatorapi.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CalculatorControllerTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testAddition() {
        ResponseEntity<Double> response = restTemplate.getForEntity("/add?a=1&b=2", Double.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(3.0, response.getBody());
    }

    @Test
    public void testSubtraction() {
        ResponseEntity<Double> response = restTemplate.getForEntity("/subtract?a=2&b=1", Double.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1.0, response.getBody());
    }

    @Test
    public void testMultiplication() {
        ResponseEntity<Double> response = restTemplate.getForEntity("/multiply?a=2&b=4", Double.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(8.0, response.getBody());
    }

    @Test
    public void testDivision() {
        ResponseEntity<Double> response = restTemplate.getForEntity("/divide?a=4&b=2", Double.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2.0, response.getBody());
    }

    @Test
    public void testDivisionByZero() {
        ResponseEntity<String> response = restTemplate.getForEntity("/divide?a=1&b=0", String.class);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Division by zero is not allowed.", response.getBody());
    }

    @Test
    public void testInvalidInput() {
        ResponseEntity<String> response = restTemplate.getForEntity("/add?a=test&b=3", String.class);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Invalid input: 'test'. Please provide a valid number.", response.getBody());
    }
}