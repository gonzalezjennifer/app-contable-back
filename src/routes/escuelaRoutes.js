import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { check } from 'express-validator'
import {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById,
  getAdminByUsername
} from '../controllers/escuelaController.js'

const router = express.Router()

router.post(
  '/create/admin',
  // aqui va el middleware
  [
    check('usuario').notEmpty().withMessage('El usuario es obligatorio'),
    check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener minimo 6 caracteres')
  ],
  createAdmin
)
router.put('/update/admin/:id', authMiddleware, updateAdmin)
router.delete('/delete/admin/:id', authMiddleware, deleteAdmin)
router.get('/admin/:id', authMiddleware, getAdminById)
router.get('/admin/usuario/:usuario', authMiddleware, getAdminByUsername)

export default router
