document.addEventListener("readystatechange", () => {
  console.log(`document.readyState = ${document.readyState}`);
});
console.log(`document.readyState = ${document.readyState}`);
let startTime = performance.now();
while (performance.now() - startTime < 7000) {
  if (performance.now() - startTime > 6999) {
    console.log("Just about to exit");
  }
}
console.log(`document.readyState = ${document.readyState}`);
