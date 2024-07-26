// javascript code goes here


const textContainer = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorChangeButton = document.getElementById("colorchange");
const fontSizeInput = document.getElementById("fontsize");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
const boldButton = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleButton = document.getElementById("getstyle");
const cssPropsParagraph = document.getElementById("css-props");

// Initialize font size
textContainer.style.fontSize = `${fontSizeInput.value}px`;

// Add event listeners
colorChangeButton.addEventListener("click", () => {
  textContainer.style.color = colorBox.value;
});

fontSizeInput.addEventListener("input", () => {
  textContainer.style.fontSize = `${fontSizeInput.value}px`;
});

italicButton.addEventListener("click", () => {
  textContainer.style.fontStyle = textContainer.style.fontStyle === "italic"? "" : "italic";
});

underlineButton.addEventListener("click", () => {
  textContainer.style.textDecoration = textContainer.style.textDecoration === "underline"? "" : "underline";
});

boldButton.addEventListener("click", () => {
  textContainer.style.fontWeight = textContainer.style.fontWeight === "bold"? "" : "bold";
});

fontList.addEventListener("change", () => {
  textContainer.style.fontFamily = fontList.value;
});

getStyleButton.addEventListener("click", () => {
  const cssProps = [];
  cssProps.push(`color: ${textContainer.style.color};`);
  cssProps.push(`font-size: ${textContainer.style.fontSize};`);
  if (textContainer.style.fontStyle === "italic") {
    cssProps.push("font-style: italic;");
  }
  if (textContainer.style.textDecoration === "underline") {
    cssProps.push("text-decoration: underline;");
  }
  if (textContainer.style.fontWeight === "bold") {
    cssProps.push("font-weight: bold;");
  }
  cssProps.push(`font-family: ${textContainer.style.fontFamily};`);
  cssPropsParagraph.textContent = cssProps.join(" ");
});