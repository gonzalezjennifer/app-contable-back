import { db } from '../config/firebase.js'
import escuelaModel from '../models/escuelaModel.js'

class EscuelaRepository {
  async createAdmin(data) {
    const admin = await db.collection('adminsescuela').add({
      nombreescuela: data.nombreescuela,
      correo: data.correo,
      telefono: data.telefono,
      ciudad: data.ciudad,
      direccion: data.direccion,
      usuario: data.usuario,
      password: data.password,
      idioma: data.idioma
    })

    return admin.id
  }

  async updateAdmin(id, data) {
    await db.collection('adminsescuela').doc(id).update(data)
  }

  async deleteAdmin(id) {
    await db.collection('adminsescuela').doc(id).delete()
  }

  async getAdminById(id) {
    const doc = await db.collection('adminsescuela').doc(id).get()

    if(!doc.exists) {
      return null
    }

    const data = doc.data()
    return new escuelaModel.AdminModel(
      doc.id,
      data.nombreescuela,
      data.correo,
      data.telefono,
      data.ciudad,
      data.direccion,
      data.usuario,
      data.password,
      data.idioma
    )
  }

  async getAdminByUsername(usuario) {
    const admin = await db.collection('adminsescuela').where('usuario', '==', usuario).get()

    if(admin.empty) {
      return null
    }

    const doc = admin.docs[0]
    const data = doc.data()
    return new escuelaModel.AdminModel(
      doc.id,
      data.nombreescuela,
      data.correo,
      data.telefono,
      data.ciudad,
      data.direccion,
      data.usuario,
      data.password,
      data.idioma
    )
  }

  async createMaestro(data) {
    const maestro = await db.collection('maestros').add({
      nombre: data.nombre,
      genero: data.genero,
      clase: data.clase,
      asignatura: data.asignatura,
      direccion: data.direccion,
      fechanacimiento: data.fechanacimiento,
      telefono: data.telefono,
      religion: data.religion,
      correo: data.correo,
      gruposangre: data.gruposangre
    })

    return maestro.id
  }
  
  async getMaestroById(id) {
    const doc = await db.collection('maestros').doc(id).get()

    if(!doc.exists) {
      return null
    }

    const data = doc.data()
    return new escuelaModel.MaestroModel(
      doc.id,
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
  }

  async createGasto(data) {
    const gasto = await db.collection('gastos').add({
      nombre: data.nombre,
      tipo: data.tipo,
      cantidad: data.cantidad,
      estado: data.estado,
      correo: data.correo,
      numero: data.numero,
      fechalimite: data.fechalimite
    })

    return gasto.id
  }

  async getGastoById(id) {
    const doc = await db.collection('gastos').doc(id).get()

    if(!doc.exists) {
      return null
    }

    const data = doc.data()
    return new escuelaModel.GastosModel(
      doc.id,
      data.nombre,
      data.tipo,
      data.cantidad,
      data.estado,
      data.correo,
      data.numero,
      data.fechalimite
    )
  }


}

export default EscuelaRepository
