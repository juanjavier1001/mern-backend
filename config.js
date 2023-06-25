export const PORT = process.env.PORT || 4000;

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_Name = process.env.DB_Name || 'taskpb2023';
const DB_PORT = process.env.DB_PORT || '';

export { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE };
