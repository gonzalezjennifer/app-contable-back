class AdminModel {
  constructor(id, nombreescuela, correo, telefono, ciudad, direccion, usuario, password, idioma) {
    this.id = id,
    this.nombreescuela = nombreescuela,
    this.correo = correo,
    this.telefono = telefono,
    this.ciudad = ciudad,
    this.direccion = direccion
    this.usuario = usuario,
    this.password = password,
    this.idioma = idioma
  }
}

class EstudianteModel {
  constructor(id, nombre, genero, clase, nacimiento, gruposangre, religion, fechaadmicion, nombretutor, generotutor, correotutor, telefonotutor, ocupaciontutor, direcciontutor, religiontutor, cantidadpago, statuspago) {
    this.id = id,
    this.nombre = nombre,
    this.genero = genero,
    this.clase = clase,
    this.nacimiento = nacimiento,
    this.gruposangre = gruposangre,
    this.religion = religion,
    this.fechaadmicion = fechaadmicion,
    this.nombretutor = nombretutor,
    this.generotutor = generotutor,
    this.correotutor = correotutor,
    this.telefonotutor = telefonotutor,
    this.ocupaciontutor = ocupaciontutor,
    this.direcciontutor = direcciontutor,
    this.religiontutor = religiontutor,
    this.cantidadpago = cantidadpago,
    this.statuspago = statuspago
  }
}

export default {
  AdminModel,
  EstudianteModel
}