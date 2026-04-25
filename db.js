const Database = require('better-sqlite3');

const db = new Database('database.db');

// Criar tabelas
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    title TEXT NOT NULL,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Inserir dados de exemplo
const insertUser = db.prepare('INSERT OR IGNORE INTO users (name, email) VALUES (?, ?)');
insertUser.run('Joao Silva', 'joao@exemplo.com');
insertUser.run('Maria Santos', 'maria@exemplo.com');

// Consultar dados
const users = db.prepare('SELECT * FROM users').all();
console.log('Usuarios:', users);

// Exportar para uso em outros modulos
module.exports = db;
