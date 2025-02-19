# Unit Testing - Activity
## Adding new tests to Unit Test

- Edit the file classifyTrangles.test.js and add new tests as mentioned in the comments of the existing test cases.

- You need to add at least 20 new test cases to the test file and upload the classifyTriangle.js  in myCourses.

- Add comments for each test describing what is the purpose of adding the test case.

- Run the test cases and share the testcases file along with the screenshot of the output of the test.

## Running test
- Add a new Codespaces and the workflow will automatically install Nodejs to the environment.
- To run the Unit tests you have added to classifyTriangle.js file:

```
npm test
```

- in case you bump into an issue, install the packages using through terminal in Codespaces:
```
npm install
```


# Requirements for Triangle Classifier

## Program Functionality

The Triangle Classifier is a simple program designed to classify the type of triangle based on the lengths of its sides (See Jorgensen's Textbook for details). 

The sides of the triangle are represented by three integer values: `a`, `b`, and `c`.

## Input Conditions

To determine the type of triangle, the following conditions must be met:

- **C1**: The length of side `a` must be between 1 and 200, inclusive (1 ≤ a ≤ 200).
- **C2**: The length of side `b` must be between 1 and 200, inclusive (1 ≤ b ≤ 200).
- **C3**: The length of side `c` must be between 1 and 200, inclusive (1 ≤ c ≤ 200).
- **C4**: The length of side `a` must be less than the sum of the lengths of sides `b` and `c` (a < b + c).
- **C5**: The length of side `b` must be less than the sum of the lengths of sides `a` and `c` (b < a + c).
- **C6**: The length of side `c` must be less than the sum of the lengths of sides `a` and `b` (c < a + b).

## Classification

The program will return an error if conditions C1, C2, or C3 are not satisfied.

## Outputs

If the input values for `a`, `b`, and `c` satisfy conditions C1, C2, and C3, the program will classify the triangle as one of the following types:

- **Equilateral**: All three sides are equal (a == b == c).
- **Isosceles**: Exactly two sides are equal (a == b || a == c || b == c).
- **Scalene**: No pair of sides is equal (a != b != c).
- **Not a Triangle**: If any of the conditions C4, C5, or C6 are not met, it is not a valid triangle.

## Usage

To use the Triangle Classifier, provide the lengths of the sides when calling the function:

```javascript
const triangleType = classifyTriangle(a, b, c);
console.log(triangleType);
```
