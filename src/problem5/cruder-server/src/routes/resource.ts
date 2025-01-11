import express from 'express';
import dbPromise from '../database';
import {createResource, getResourcesById, getResources, updateResource, deleteResource} from '../controllers/resource.controller';

const router = express.Router();

/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Create a resource.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *          description: Created
 */
router.post('/', createResource);

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Returns all resources
 *     parameters:
 *       - name: name
 *         in: query 
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *        description: OK
 */
router.get('/', getResources);

/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Get details of a resource.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *        description: OK
 */
router.get('/:id', getResourcesById);

/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Update resource details.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *        description: OK
 */
router.put('/:id', updateResource);

/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Delete a resource.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *        description: OK
 */
router.delete('/:id', deleteResource);

export default router;