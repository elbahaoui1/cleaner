import path from "path";
import fs from "fs";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let dbPromise: Promise<Database<sqlite3.Database, sqlite3.Statement>> | null = null;

function resolveDatabasePath(): string {
  const fromEnv = process.env.SQLITE_PATH;
  const defaultPath = path.join(process.cwd(), "data.sqlite");
  const candidate = fromEnv && fromEnv.trim().length > 0 ? fromEnv : defaultPath;

  try {
    const dir = path.dirname(candidate);
    fs.mkdirSync(dir, { recursive: true });
    fs.accessSync(dir, fs.constants.W_OK);
    return candidate;
  } catch {
    const tmpDir = process.env.TMPDIR || "/tmp";
    const fallback = path.join(tmpDir, "data.sqlite");
    try {
      const dir = path.dirname(fallback);
      fs.mkdirSync(dir, { recursive: true });
      fs.accessSync(dir, fs.constants.W_OK);
      return fallback;
    } catch {
      // As a last resort, return defaultPath and let open() throw - upstream will catch
      return defaultPath;
    }
  }
}

export async function getDb() {
  if (!dbPromise) {
    const dbPath = resolveDatabasePath();
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


