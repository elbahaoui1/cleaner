import path from "path";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let dbPromise: Promise<Database<sqlite3.Database, sqlite3.Statement>> | null = null;

export async function getDb() {
  if (!dbPromise) {
    const dbPath = path.join(process.cwd(), "data.sqlite");
    dbPromise = open({ filename: dbPath, driver: sqlite3.Database });
    const db = await dbPromise;
    await db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL
      );
    `);
  }
  return dbPromise!;
}


