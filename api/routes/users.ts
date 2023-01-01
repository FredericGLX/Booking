import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/User';
import { verifyAdmin, verifyUser } from '../utils/verifyToken';

const router = express.Router();

// CREATE
router.post('/', verifyUser, createUser);

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
