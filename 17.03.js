const { Transform } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const capitalize = new Transform({
  transform(chunk, encoding, callback) {
    let capitalizedChunk = chunk.toString()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    this.push(capitalizedChunk);
    callback();
  }
});

const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('output.txt');

readStream.pipe(capitalize).pipe(writeStream);