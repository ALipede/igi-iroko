import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const querySql =
      'SELECT id, title, alt, description, image FROM carousel_home';
    const values = [];
    const data = await query({ query: querySql, values: values });

    res.status(200).json({ carouselhome: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
