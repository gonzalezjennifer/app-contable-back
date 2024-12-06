import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { check } from 'express-validator'
import {
  createAdmin,
  updateAdmin,
  getAdminById,
  getAdminByUsername,
  createAlumno,
  updateAlumno,
  getAllAlumnos,
  getAlumnoById,
  getAlumnoByNameClass,
  createMaestro,
  getMaestroById,
  getAllMaestros,
  createGasto,
  getGastoById,
  getAllGastos,
  updateGasto,
  createAsignatura,
  getAsignaturaById,
  getAllAsignaturas, getGraficas
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
router.get('/admin/:id', authMiddleware, getAdminById)
router.get('/admin/usuario/:usuario', authMiddleware, getAdminByUsername)

router.post('/create/alumno',authMiddleware, createAlumno)
router.put('/update/alumno/:id', authMiddleware, updateAlumno)
router.get('/getall/alumnos',authMiddleware, getAllAlumnos)
router.get('/alumno/:id', authMiddleware, getAlumnoById)
router.get('/alumno/nombre/:nombre/clase/:clase', getAlumnoByNameClass)


router.post('/create/maestro', authMiddleware, createMaestro)
router.get('/maestro/:id', authMiddleware, getMaestroById)
router.get('/getall/maestros', authMiddleware, getAllMaestros)

router.post(
  '/create/gasto',
  authMiddleware,
  [
    check('tipo').notEmpty().withMessage('El tipo de gasto es obligatorio')
  ],
  createGasto
)
router.get('/gasto/:id', authMiddleware, getGastoById)
router.get('/getall/gastos', authMiddleware, getAllGastos)
router.put('/update/gasto/:id', authMiddleware, updateGasto)

router.post(
  '/create/asignatura',
  authMiddleware,
  [
    check('nombre').notEmpty().withMessage('El nombre de la asignatura es obligatorio'),
    check('maestro').notEmpty().withMessage('El nombre del maestro es obligatorio')
  ],
  createAsignatura
)
router.get('/asignatura/:id', authMiddleware, getAsignaturaById)
router.get('/getall/asignaturas', authMiddleware, getAllAsignaturas)

router.get("/graficas",getGraficas)

export default router
