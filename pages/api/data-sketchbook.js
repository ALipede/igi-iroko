import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const querySql = 'SELECT id, title, image FROM bird_sketchbook';
    const values = [];
    const data = await query({ query: querySql, values: values });

    res.status(200).json({ sketchbooks: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
