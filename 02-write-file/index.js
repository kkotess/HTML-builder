const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'output.txt'));
stdout.write('Hello! Please enter some text.');
stdin.on('data', (data) => {
  const input = data.toString().trim();
  output.write(`${input}\n`);
});

console.log();
