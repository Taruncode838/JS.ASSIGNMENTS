function calculate(num1, num2, operation) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          Error("Cannot divide by zero!");
        }
        return num1 / num2;
      default:
        Error("Invalid operation");
    }
  }