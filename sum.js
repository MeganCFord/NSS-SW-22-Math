//What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?
var sum = (1+2+3+4+5+6+7+8+9)
var difference = Math.pow(sum,2)-(Math.pow(1,2)+Math.pow(2,2)+Math.pow(3,2)+Math.pow(4,2)+Math.pow(5,2)+Math.pow(6,2)+Math.pow(7,2)+Math.pow(8,2)+Math.pow(9,2))

console.log("solution", difference); 

//((1^2)+(2^2)+(3^2)+(4^2)+(5^2)+(6^2)+(7^2)+(8^2)+(9^2))-((1+2+3+4+5+6+7+8+9)^2)
