let num = parseInt(prompt("Enter a number for multiplication table: "));

for (let i = 1; i <= 10; i++) {
  let product = num*i;
  if (product % 5 == 0) {
    continue;
  }
  console.log(`${num} x ${i} = ${product}`);
}
