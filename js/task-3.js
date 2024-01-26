function getElementWidth(contentWidth, paddingWidth, borderWidth) {
  return (
    Number.parseFloat(contentWidth) +
    2 * Number.parseFloat(paddingWidth) +
    2 * Number.parseFloat(borderWidth)
  );
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
