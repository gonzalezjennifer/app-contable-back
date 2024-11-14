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
}

export default EscuelaRepository
