import bcrypt from 'bcrypt'
import EscuelaRepository from '../repositories/escuelaRepository.js'
import EscuelaModel from '../models/escuelaModel.js'

const escuelaRepository = new EscuelaRepository()
const saltRound = 10

class EscuelaService {
  async createAdmin (data) {
    const existAdmin = await escuelaRepository.getAdminByUsername(data.usuario)
    if (existAdmin) {
      throw new Error('El username ya existe')
    }
    const hashedPass = await bcrypt.hash(data.password, saltRound)

    const newAdmin = new EscuelaModel.AdminModel(
      null,
      data.nombreescuela,
      data.correo,
      data.telefono,
      data.ciudad,
      data.direccion,
      data.usuario,
      hashedPass,
      data.idioma
    )

    const adminId = await escuelaRepository.createAdmin(newAdmin)

    return adminId
  }

  async updateAdmin(id, data){
    const existAdmin = await escuelaRepository.getAdminById(id)
    if (!existAdmin) {
      throw new Error('Admin no encontrado')
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, saltRound)
    }

    await escuelaRepository.updateAdmin(id, data)
  }

  async deleteAdmin(id) {
    const existAdmin = await escuelaRepository.getAdminById(id)
    if (!existAdmin) {
      throw new Error('Admin no encontrado')
    }
    await escuelaRepository.deleteAdmin(id)
  }

  async getAdminById(id) {
    return await escuelaRepository.getAdminById(id)
  }

  async getAdminByUsername(usuario) {
    return await escuelaRepository.getAdminByUsername(usuario)
  }
}

export default EscuelaService