#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2];

if (!projectName) {
  console.log('Uso: express-create <nome-do-projeto>');
  process.exit(1);
}

const currentDir = process.cwd();
const targetDir = path.join(currentDir, projectName);

// Copia arquivos do template
const copyRecursiveSync = (src, dest) => {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

fs.mkdirSync(targetDir);
copyRecursiveSync(path.join(__dirname, '../templates'), targetDir);

// Instala dependências
console.log('Instalando dependências...');
execSync('npm install express cors dotenv body-parser bcrypt jsonwebtoken knex sqlite3', { cwd: targetDir, stdio: 'inherit' });

console.log(`Projeto "${projectName}" criado com sucesso!`);
