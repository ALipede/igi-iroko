import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'web_development',
    port: 3306,
    user: 'root',
    password: 'j0j01ss1#MySQL',
    socketPath: '/tmp/mysql.sock',
  });

  try {
    const query =
      'SELECT id, title, address, html5, css3, rjs, njs, sass, less, php, bstrap, wpress FROM web_projects';
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ projects: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
