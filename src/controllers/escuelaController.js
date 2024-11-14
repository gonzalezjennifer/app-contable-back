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

const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id
    await escuelaService.deleteAdmin(id)
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

export {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById,
  getAdminByUsername
}