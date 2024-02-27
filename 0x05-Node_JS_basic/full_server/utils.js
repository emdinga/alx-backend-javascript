import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = lines[0].split(',');
        const students = {};
        fields.forEach((field, index) => {
          students[field] = lines.slice(1).map(line => line.split(',')[index]);
        });
        resolve(students);
      }
    });
  });
}

export default readDatabase;

