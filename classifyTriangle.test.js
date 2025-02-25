
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {

    test('should classify an Equilateral triangle', () => {
      // These are BVT
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');

      // These are ECP
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(60, 60, 60)).toBe('Equilateral');
      expect(classifyTriangle(150, 150, 150)).toBe('Equilateral');
    });
  
    test('should classify an Isosceles triangle', () => {
      // These are BVT
      expect(classifyTriangle(2, 2, 1)).toBe('Isosceles');
      expect(classifyTriangle(2, 1, 2)).toBe('Isosceles');
      expect(classifyTriangle(1, 2, 2)).toBe('Isosceles');
      expect(classifyTriangle(200, 1, 200)).toBe('Isosceles');
      expect(classifyTriangle(1, 200, 200)).toBe('Isosceles');
      expect(classifyTriangle(200, 200, 1)).toBe('Isosceles');
      
      // These are ECP
      expect(classifyTriangle(100, 80, 100)).toBe('Isosceles');
      expect(classifyTriangle(150, 100, 100)).toBe('Isosceles');
      expect(classifyTriangle(45, 60, 60)).toBe('Isosceles');
      expect(classifyTriangle(150, 150, 1)).toBe('Isosceles');
    });
  
    test('should classify a Scalene triangle', () => {
      // These are BVT
      expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
      expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
      expect(classifyTriangle(199, 198, 197)).toBe('Scalene');
      
      // These are ECP
      expect(classifyTriangle(100, 101, 102)).toBe('Scalene');
      expect(classifyTriangle(156, 165, 175)).toBe('Scalene');
      expect(classifyTriangle(65, 75, 80)).toBe('Scalene');
    });

    test('should return error for invalid inputs', () => {
      // These are tests for invalid inputs, e.g. values outside of the required range
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(198, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(198, 1, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(1, 200, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 100, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 0, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      // These are BVT
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      expect(classifyTriangle(3, 5, 9)).toBe('Not a Triangle');
      expect(classifyTriangle(10, 5, 1)).toBe('Not a Triangle');
      
      // These are ECP
      expect(classifyTriangle(10, 20, 30)).toBe('Not a Triangle');
      expect(classifyTriangle(135, 35, 170)).toBe('Not a Triangle');
 
    });
  });
  
  