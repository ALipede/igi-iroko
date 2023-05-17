import mysql from 'mysql2/promise';
export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: '<--DATABASE-->',
    port: 3306,
    user: 'root',
    password: '<--PASSWORD-->',
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
