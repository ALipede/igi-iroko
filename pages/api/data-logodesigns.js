import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const querySql = 'SELECT id, title, design FROM logo_designs';
    const values = [];
    const data = await query({ query: querySql, values: values });

    res.status(200).json({ designs: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
