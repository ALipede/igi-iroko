// import mysql from 'mysql2/promise';
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const querySql =
      'SELECT id, iconsrc, iconalt, title, icontxt FROM icons_one';
    const valuesParams = [];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ icononesets: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
