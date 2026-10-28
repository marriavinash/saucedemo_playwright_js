 const fs = require('fs');

function getTestData(fileName) {
  return JSON.parse(
    fs.readFileSync(`./test-data/${fileName}`, 'utf8')
  );
}

module.exports = { getTestData };