import mysql from 'mysql2/promise';

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'web_development',
    port: 3306,
    user: 'root',
    password: 'j0j01ss1#MySQL',
    socketPath: '/tmp/mysql.sock',
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
