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

  async createMaestro (data) {
    const newMaestro = new EscuelaModel.MaestroModel(
      null,
      data.nombre,
      data.genero,
      data.clase,
      data.asignatura,
      data.direccion,
      data.fechanacimiento,
      data.telefono,
      data.religion,
      data.correo,
      data.gruposangre
    )

    const maestroId = await escuelaRepository.createMaestro(newMaestro)

    return maestroId
  }

  async getMaestroById(id) {
    return await escuelaRepository.getMaestroById(id)
  }

  async createGasto (data) {
    const newGasto = new EscuelaModel.GastosModel(
      null,
      data.nombre,
      data.tipo,
      data.cantidad,
      data.estado,
      data.correo,
      data.numero,
      data.fechalimite
    )

    const gastoId = await escuelaRepository.createGasto(newGasto)

    return gastoId
  }

  async getGastoById(id) {
    return await escuelaRepository.getGastoById(id)
  }

  async createAsignatura (data) {
    const newAsignatura = new EscuelaModel.AsignaturasModel(
      null,
      data.nombre,
      data.maestro,
      data.clases,
      data.dias
    )

    const asignaturaId = await escuelaRepository.createAsignatura(newAsignatura)

    return asignaturaId
  }

  async getAsignaturaById(id) {
    return await escuelaRepository.getAsignaturaById(id)
  }

}

export default EscuelaService