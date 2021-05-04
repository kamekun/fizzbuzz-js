const fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz', () =>{
    // test case 1
    test('should print an error if the argument its not a number', () => {
        const expected = "Error: the argument must be a number";
        const result = fizzbuzz("15");  
        expect(expected).toBe(result);
    });
    // test case 2
    test('should print 1 if they recieve 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);  
        expect(expected).toBe(result);
    });
    // Test case 3
    test('should print fizz if they recieve 3', () => {
        const expected = "fizz";
        const result = fizzbuzz(3);  
        expect(expected).toBe(result);
    });
    // Test case 4
    test('should print fizz if they recieve a multiple of 3', () => {
        const expected = "fizz";
        const result = fizzbuzz(6);  
        expect(expected).toBe(result);
    });
    // Test case 5
    test('should print buzz if they recieve 5', () => {
        const expected = "buzz";
        const result = fizzbuzz(5);  
        expect(expected).toBe(result);
    });
    // Test case 6
     test('should print buzz if they recieve a multiple of 5', () => {
        const expected = "buzz";
        const result = fizzbuzz(10);  
        expect(expected).toBe(result);
    });
    // Test case 7
    test('should print fizzbuzz if they recieve a multiple of 3 and 5', () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);  
        expect(expected).toBe(result);
    });
})