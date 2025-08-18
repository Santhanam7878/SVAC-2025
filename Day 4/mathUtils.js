// Named exports for math utility functions and default export for greet function

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
export function add(a, b) {
    return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
export function multiply(a, b) {
    return a * b;
}

/**
 * Subtracts two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
export function subtract(a, b) {
    return a - b;
}

/**
 * Divides two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 */
export function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

/**
 * Default export - greet function
 * @param {string} name - Name to greet
 * @returns {string} Greeting message
 */
export default function greet(name = 'World') {
    return `Hello, ${name}! Welcome to our JavaScript module system.`;
}
