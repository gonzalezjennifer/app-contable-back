import { Router } from "express"
import escuelaRoutes from './escuelaRoutes.js'
import authRoutes from './authRoutes.js'

const router = Router()

// En app necesito una ruta base
router.use('/escuela', escuelaRoutes)
router.use('/auth', authRoutes)

export default router
