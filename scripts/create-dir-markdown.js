import * as fs from 'fs';
import * as path from 'path';

function generateDirectoryTree(dirPath, level = 0) {
  let result = '';
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const excludeDirs = ['node_modules', 'dist', '.github', 'public', '.git'];
    if (excludeDirs.includes(file)) {
      return;
    }

    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result += `${' '.repeat(level * 4)}├── ${file}\n`;
      result += generateDirectoryTree(filePath, level + 1);
    } else {
      result += `${' '.repeat(level * 4)}├── ${file}\n`;
    }
  });

  return result;
}

const directoryTree = generateDirectoryTree('../${해당폴더}');
console.log(directoryTree);
