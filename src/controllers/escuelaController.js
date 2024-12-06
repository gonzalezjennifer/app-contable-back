import EscuelaService from '../services/escuelaService.js'
import { subMonths, isAfter } from 'date-fns';


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
    const username = req.params.usuario
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

const getAlumnoByNameClass = async (req, res) => {
  try {
    const nombre = req.params.nombre
    const clase = req.params.clase
    const alumno = await escuelaService.getAlumnoByNameClass(nombre)

    if (!alumno) {
      return res.status(404).json({
        error: true,
        message: 'Student not found'
      })
    }

    if (clase === alumno.clase) {
      res.status(201).json({
        success: true,
        alumno
      })
    } else {
      return res.status(401).json({
        error: true,
        message: 'Student was not found in this class'
      })
    }
  } catch (error) {
    res.status(401).json({
      error: true,
      message: 'Error: ' + error.message
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

const updateGasto = async (req, res) => {
  try {
    const id = req.params.id
    await escuelaService.updateGasto(id, req.body)
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


export const getGraficas = async (req, res) => {
  try {
    const gastos = await escuelaService.getAllGastos();

    const nombresMeses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const colores = ['#2139DE', '#F22829', '#DDDEEE'];

    const fechaLimite = subMonths(new Date(), 3);

    const estadoMap = {
      'paid': 'Pagado',
      'unpaid': 'Pendiente',
      'due': 'Vencido'
    };

    const obtenerMesAnio = (fechalimite) => {
      const [dia, mes, anio] = fechalimite.split('/');
      if (!dia || !mes || !anio) {
        throw new Error(`Formato de fecha inválido: ${fechalimite}`);
      }
      return { mes: Number(mes), anio: Number(anio), fechaCompleta: new Date(`${anio}-${mes}-${dia}`) };
    };

    const gastosFiltrados = gastos.filter(gasto => {
      const { fechaCompleta } = obtenerMesAnio(gasto.fechalimite);
      return isAfter(fechaCompleta, fechaLimite);
    });

    const agrupados = gastosFiltrados.reduce((acc, gasto) => {
      const { mes, anio } = obtenerMesAnio(gasto.fechalimite);
      const clave = `${anio}-${mes.toString().padStart(2, '0')}`; // Ejemplo: "2024-12"

      if (!acc[clave]) {
        acc[clave] = {
          mes,
          anio,
          date: `${nombresMeses[mes - 1]} ${anio}`,
          totalGastado: 0
        };
      }

      const cantidad = parseFloat(gasto.cantidad) || 0;
      acc[clave].totalGastado += cantidad;
      return acc;
    }, {});

    let agrupadosArray = Object.values(agrupados);

    agrupadosArray.sort((a, b) => {
      if (a.anio !== b.anio) {
        return a.anio - b.anio;
      }
      return a.mes - b.mes;
    });

    const datasetsGastado = agrupadosArray.map((item, index) => ({
      label: `${item.date} - $${item.totalGastado.toFixed(2)}`, // Incluye el total gastado
      backgroundColor: colores[index % colores.length], // Usar colores específicos en ciclo
      data: [item.totalGastado]
    }));

    const chartDataGastado = {
      datasets: datasetsGastado
    };

    const agrupadosPagos = gastosFiltrados.reduce((acc, gasto) => {
      const { mes, anio } = obtenerMesAnio(gasto.fechalimite);
      const clave = `${anio}-${mes.toString().padStart(2, '0')}`;

      if (!acc[clave]) {
        acc[clave] = {
          mes,
          anio,
          Paid: 0,
          Unpaid: 0,
          Due: 0
        };
      }

      switch (gasto.estado.toLowerCase()) {
        case 'paid':
          acc[clave].Paid += 1;
          break;
        case 'unpaid':
          acc[clave].Unpaid += 1;
          break;
        case 'due':
          acc[clave].Due += 1;
          break;
        default:
          break;
      }

      return acc;
    }, {});

    let agrupadosPagosArray = Object.values(agrupadosPagos);

    agrupadosPagosArray.sort((a, b) => {
      if (a.anio !== b.anio) {
        return a.anio - b.anio;
      }
      return a.mes - b.mes;
    });

    const estados = ['Paid', 'Unpaid', 'Due'];
    const coloresEstados = ['#2139DE', '#F22829', '#DDDEEE'];

    const datasetsPagos = estados.map((estado, index) => ({
      label: estadoMap[estado.toLowerCase()] || estado,
      borderColor: coloresEstados[index],
      fill: false,
      data: agrupadosPagosArray.map(item => item[estado] || 0)
    }));

    const chartDataPagos = {
      labels: agrupadosPagosArray.map(item => `${nombresMeses[item.mes - 1]} ${item.anio}`),
      datasets: datasetsPagos
    };

    res.status(200).json({
      gastosPorMes: agrupadosArray.map(item => ({
        date: item.date,
        totalGastado: item.totalGastado
      })),
      chartDataGastado,
      pagosPorMes: agrupadosPagosArray.map(item => ({
        date: `${nombresMeses[item.mes - 1]} ${item.anio}`,
        Pagado: item.Paid,
        Pendiente: item.Unpaid,
        Vencido: item.Due
      })),
      chartDataPagos
    });
  } catch (e) {
    console.error('Error en getGraficas:', e);
    res.status(400).json({
      success: false,
      message: e.message
    });
  }
};



export {
  createAdmin,
  updateAdmin,
  getAdminById,
  getAdminByUsername,
  createAlumno,
  updateAlumno,
  getAllAlumnos,
  getAlumnoById,
  getAlumnoByNameClass,
  createMaestro,
  getMaestroById,
  getAllMaestros,
  createGasto,
  getGastoById,
  getAllGastos,
  updateGasto,
  createAsignatura,
  getAsignaturaById,
  getAllAsignaturas
}
