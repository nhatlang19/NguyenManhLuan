import { Request, Response } from 'express';
import db from "../database";
import { CreateResource } from "../dto/resource.dto";

export const createResource = (req: Request<CreateResource>, res: Response): void => {
  const { name, description } = req.body;
  db.run(
    'INSERT INTO resources (name, description) VALUES (?, ?)',
    [name, description], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      res.status(201).json({ id: this.lastID });
  });
}

export const getResources = (req: Request, res: Response): void => {
  const { name } = req.query;

  let query = 'SELECT * FROM resources WHERE 1 = 1';
  let params = [];

  if (name) {
    query += ' AND name LIKE ?';
    params.push(`%${name}%`);
  }

  console.log(query);

  db.all(query, params, function (err, rows) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
}

export const getResourcesById = (req: Request, res: Response): void => {
  const { id } = req.params;
  db.get('SELECT * FROM resources WHERE id = ?', [id], function (err, row) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(row);
  });
}

export const updateResource = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name, description } = req.body;
  db.run(
    'UPDATE resources SET name = ?, description = ? WHERE id = ?',
    [name, description, id]
  );
  res.json({ message: 'Resource updated' });
}

export const deleteResource = (req: Request, res: Response): void => {
  const { id } = req.params;
  db.run('DELETE FROM resources WHERE id = ?', [id]);
  res.json({ message: 'Resource deleted' });
}