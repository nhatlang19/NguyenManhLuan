import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
      console.error('Error opening database:', err.message);
  } else {
      console.log('Connected to SQLite database.');
  }
});

export const initDatabase = async () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    );
  `);
};

export default db;
