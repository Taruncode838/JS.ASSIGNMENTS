
//Write your code here
    function createDiv(width, height, text) {const container = document.getElementById("container");
    const newDiv = document.createElement("div");
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.textContent = text;
  }
  
  
  // Do not change this code
  Window.createDiv = createDiv;