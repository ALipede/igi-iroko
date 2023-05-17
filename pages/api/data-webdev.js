import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const querySql =
      'SELECT id, title, address, html5, css3, rjs, njs, sass, less, php, bstrap, wpress FROM web_projects';
    const values = [];
    const data = await query({ query: querySql, values: values });

    res.status(200).json({ projects: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
