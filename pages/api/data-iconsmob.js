import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'icons_set',
    port: 3306,
    user: 'root',
    password: '<-- PASSWORD -->',
    socketPath: '/tmp/mysql.sock',
  });

  try {
    const query = 'SELECT id, iconsrc, iconalt, title, icontxt FROM icons_mob';
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ icononesets: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
