const sentence = "hello there from lighthouse labs\n";
let ms = 200;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, ms)
  ms += 200;
}
/* setTimeout(() => {
  console.log("\n")
}, ms * (sentence.length + 1)); */