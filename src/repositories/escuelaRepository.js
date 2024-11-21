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

  async createAlumno(data) {
    const alumno = await db.collection('alumnos').add({
      nombre: data.nombre,
      genero: data.genero,
      clase: data.clase,
      nacimiento: data.nacimiento,
      gruposangre: data.gruposangre,
      religion: data.religion,
      fechaadmicion: data.fechaadmicion,
      nombretutor: data.nombretutor,
      generotutor: data.generotutor,
      correotutor: data.correotutor,
      telefonotutor: data.telefonotutor,
      ocupaciontutor: data.ocupaciontutor,
      direcciontutor: data.direcciontutor,
      religiontutor: data.religiontutor,
      cantidadpago: data.cantidadpago,
      statuspago: data.statuspago
    })

    return alumno.id
  }

  async updateAlumno(id, data) {
    await db.collection('alumnos').doc(id).update(data)
  }

  async getAllAlumnos() {
    const docs = await db.collection('alumnos').get()
    const alumnos = []
    docs.forEach((doc) => {
      const data = doc.data()
      alumnos.push(new escuelaModel.AlumnoModel(
        doc.id,
        data.nombre,
        data.genero,
        data.clase,
        data.nacimiento,
        data.gruposangre,
        data.religion,
        data.fechaadmicion,
        data.nombretutor,
        data.generotutor,
        data.correotutor,
        data.telefonotutor,
        data.ocupaciontutor,
        data.direcciontutor,
        data.religiontutor,
        data.cantidadpago,
        data.statuspago
        
      ))
    })
    return alumnos
  }

  async getAlumnoById(id) {
    const doc = await db.collection('alumnos').doc(id).get()

    if(!doc.exists) {
      return null
    }

    const data = doc.data()
    return new escuelaModel.AlumnoModel(
      doc.id,
      data.nombre,
      data.genero,
      data.clase,
      data.nacimiento,
      data.gruposangre,
      data.religion,
      data.fechaadmicion,
      data.nombretutor,
      data.generotutor,
      data.correotutor,
      data.telefonotutor,
      data.ocupaciontutor,
      data.direcciontutor,
      data.religiontutor,
      data.cantidadpago,
      data.statuspago
    )
  }

  async createMaestro(data) {
    const maestro = await db.collection('maestros').add({
      nombre: data.nombre,
      apellido: data.apellido,
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
      data.apellido,
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

  async getAllMaestros() {
    const docs = await db.collection('maestros').get()
    const maestros = []
    docs.forEach((doc) => {
      const data = doc.data()
      maestros.push(new escuelaModel.MaestroModel(
        doc.id,
        data.nombre,
        data.apellido,
        data.genero,
        data.clase,
        data.asignatura,
        data.direccion,
        data.fechanacimiento,
        data.telefono,
        data.religion,
        data.correo,
        data.gruposangre
      ))
    })
    return maestros
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

  async getAllGastos() {
    const docs = await db.collection('gastos').get()
    const gastos = []
    docs.forEach((doc) => {
      const data = doc.data()
      gastos.push(new escuelaModel.GastosModel(
        doc.id,
        data.nombre,
        data.tipo,
        data.cantidad,
        data.estado,
        data.correo,
        data.numero,
        data.fechalimite
      ))
    })
    return gastos
  }

  async createAsignatura(data) {
    const asignatura = await db.collection('asignaturas').add({
      nombre: data.nombre,
      maestro: data.maestro,
      clases: data.clases,
      dias: data.dias
    })

    return asignatura.id
  }

  async getAsignaturaById(id) {
    const doc = await db.collection('asignaturas').doc(id).get()

    if(!doc.exists) {
      return null
    }

    const data = doc.data()
    return new escuelaModel.AsignaturasModel(
      doc.id,
      data.nombre,
      data.maestro,
      data.clases,
      data.dias
    )
  }

  async getAllAsignaturas() {
    const docs = await db.collection('asignaturas').get()
    const asignaturas = []
    docs.forEach((doc) => {
      const data = doc.data()
      asignaturas.push(new escuelaModel.AsignaturasModel(
        doc.id,
        data.nombre,
        data.maestro,
        data.clases,
        data.dias
      ))
    })
    return asignaturas
  }

}

export default EscuelaRepository
