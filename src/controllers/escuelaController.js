import EscuelaService from '../services/escuelaService.js'

const escuelaService = new EscuelaService()

const createAdmin = async (req, res) => {
  try {
    const adminId = await escuelaService.createAdmin(req.body)
    res.status(201).json({
      success: true,
      adminId
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id
    await escuelaService.updateAdmin(id, req.body)
    res.status(201).json({
      success: true
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAdminById = async (req, res) => {
  try {
    const id = req.params.id
    const admin = await escuelaService.getAdminById(id)
    if (!admin) {
      res.status(404).json({
        success: false,
        message: 'Admin not found'
      })
    }
    res.status(201).json({
      success: true,
      admin
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAdminByUsername = async (req, res) => {
  try {
    const username = req.params.username
    const admin = await escuelaService.getAdminByUsername(username)
    if (!admin) {
      res.status(404).json({
        success: false,
        message: 'Admin not found'
      })
    }
    res.status(201).json({
      success: true,
      admin
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const createAlumno = async (req, res) => {
  try {
    const alumnoId = await escuelaService.createAlumno(req.body)
    res.status(201).json({
      success: true,
      alumnoId
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const updateAlumno = async (req, res) => {
  try {
    const id = req.params.id
    await escuelaService.updateAlumno(id, req.body)
    res.status(201).json({
      success: true
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await escuelaService.getAllAlumnos()
    res.status(201).json({
      success: true,
      alumnos
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAlumnoById = async (req, res) => {
  try {
    const id = req.params.id
    const alumno = await escuelaService.getAlumnoById(id)
    if (!alumno) {
      res.status(404).json({
        success: false,
        message: 'Alumno not found'
      })
    }
    res.status(201).json({
      success: true,
      alumno
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const createMaestro = async (req, res) => {
  try {
    const maestroId = await escuelaService.createMaestro(req.body)
    res.status(201).json({
      success: true,
      maestroId
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getMaestroById = async (req, res) => {
  try {
    const id = req.params.id
    const maestro = await escuelaService.getMaestroById(id)
    if (!maestro) {
      res.status(404).json({
        success: false,
        message: 'Maestro no encontrado'
      })
    }
    res.status(201).json({
      success: true,
      maestro
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllMaestros = async (req, res) => {
  try {
    const maestros = await escuelaService.getAllMaestros()
    res.status(201).json({
      success: true,
      maestros
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const createGasto = async (req, res) => {
  try {
    const gastoId = await escuelaService.createGasto(req.body)
    res.status(201).json({
      success: true,
      gastoId
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getGastoById = async (req, res) => {
  try {
    const id = req.params.id
    const gasto = await escuelaService.getGastoById(id)
    if (!gasto) {
      res.status(404).json({
        success: false,
        message: 'Gasto no encontrado'
      })
    }
    res.status(201).json({
      success: true,
      gasto
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllGastos = async (req, res) => {
  try {
    const gastos = await escuelaService.getAllGastos()
    res.status(201).json({
      success: true,
      gastos
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const createAsignatura = async (req, res) => {
  try {
    const asignaturaId = await escuelaService.createAsignatura(req.body)
    res.status(201).json({
      success: true,
      asignaturaId
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAsignaturaById = async (req, res) => {
  try {
    const id = req.params.id
    const asignatura = await escuelaService.getAsignaturaById(id)
    if (!asignatura) {
      res.status(404).json({
        success: false,
        message: 'Asignatura no encontrada'
      })
    }
    res.status(201).json({
      success: true,
      asignatura
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const getAllAsignaturas = async (req, res) => {
  try {
    const asignaturas = await escuelaService.getAllAsignaturas()
    res.status(201).json({
      success: true,
      asignaturas
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

export {
  createAdmin,
  updateAdmin,
  getAdminById,
  getAdminByUsername,
  createAlumno,
  updateAlumno,
  getAllAlumnos,
  getAlumnoById,
  createMaestro,
  getMaestroById,
  getAllMaestros,
  createGasto,
  getGastoById,
  getAllGastos,
  createAsignatura,
  getAsignaturaById,
  getAllAsignaturas
}