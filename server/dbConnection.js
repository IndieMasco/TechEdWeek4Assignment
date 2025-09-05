// Import packages
import pg from "pg";
import dotenv from "dotenv";

// Configure dotenv --> we are activating the .env file
dotenv.config();

// Create a connection string --> this will create a channel between this server and my database in Supabase
const dbConnectionString = process.env.DATABASE_URL;

// Create a pool for our requests
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
