const fs = require('fs');
const readableStream = fs.createReadStream('input.txt', 'utf8');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
readableStream.on('data', (chunk) => {
  console.log('Reading chunk: ', chunk);
});
writableStream.on('finish', () => {
  console.log('Writing complete.');
});
readableStream.on('error', (err) => {
  console.log('Error while reading: ', err);
});
writableStream.on('error', (err) => {
  console.log('Error while writing: ', err);
});
