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

class AlumnoModel {
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

class MaestroModel {
  constructor(id, nombre, apellido, genero, clase, asignatura, direccion, fechanacimiento, telefono, religion, correo, gruposangre) {
    this.id = id,
    this.nombre = nombre,
    this.apellido = apellido,
    this.genero = genero,
    this.clase = clase,
    this.asignatura = asignatura,
    this.direccion = direccion,
    this.fechanacimiento = fechanacimiento,
    this.telefono = telefono,
    this.religion = religion,
    this.correo = correo,
    this.gruposangre = gruposangre
  }
}

class GastosModel {
  constructor(id, nombre, tipo, cantidad, estado, correo, numero, fechalimite){
    this.id = id,
    this.nombre = nombre,
    this.tipo = tipo,
    this.cantidad = cantidad,
    this.estado = estado,
    this.correo = correo,
    this.numero = numero,
    this.fechalimite = fechalimite
  }
}

class AsignaturasModel {
  constructor(id, nombre, maestro, clases, dias){
    this.id = id,
    this.nombre = nombre,
    this.maestro = maestro,
    this.clases = clases,
    this.dias = dias
  }
}

export default {
  AdminModel,
  AlumnoModel,
  MaestroModel,
  GastosModel,
  AsignaturasModel
}