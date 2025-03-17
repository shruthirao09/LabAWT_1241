const fs = require('fs');
const path = require('path');
const rootDir = 'myDirectory';
const subDir = path.join(rootDir, 'subFolder');
const textContent = 'Hello, this is a simple text file!';
const jsonContent = JSON.stringify({ name: 'Alice', age: 30, job: 'Engineer' }, null, 2);
const csvContent = [
  ['Name', 'Age', 'Job'],
  ['Alice', 30, 'Engineer'],
  ['Bob', 25, 'Designer'],
  ['Charlie', 35, 'Manager']
].map(row => row.join(',')).join('\n');
const markdownContent = `
# My Markdown File

## Introduction
This is a sample Markdown file.

- Item 1
- Item 2
- Item 3
`;
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML File</title>
</head>
<body>
    <h1>Hello, this is a sample HTML file!</h1>
    <p>Created using Node.js fs module.</p>
</body>
</html>
`;
fs.mkdir(rootDir, { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating root directory:', err);
    return;
  }

  console.log('Root directory created successfully!');
  fs.mkdir(subDir, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating subfolder:', err);
      return;
    }

    console.log('Subfolder created successfully!');
    fs.writeFile(path.join(rootDir, 'notes.txt'), textContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing .txt file:', err);
        return;
      }
      console.log('.txt file created successfully!');
    });
    fs.writeFile(path.join(rootDir, 'user.json'), jsonContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing .json file:', err);
        return;
      }
      console.log('.json file created successfully!');
    });
    fs.writeFile(path.join(rootDir, 'employees.csv'), csvContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing .csv file:', err);
        return;
      }
      console.log('.csv file created successfully!');
    });
    fs.writeFile(path.join(rootDir, 'README.md'), markdownContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing .md file:', err);
        return;
      }
      console.log('.md file created successfully!');
    });
    fs.writeFile(path.join(subDir, 'index.html'), htmlContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing .html file:', err);
        return;
      }
      console.log('.html file created successfully!');
    });
  });
});
