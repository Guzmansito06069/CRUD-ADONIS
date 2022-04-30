'use strict'
const Task = use('App/Models/Estado')
const { validate } = use('Validator')
class EstadoController {
  async index ({ view }) {
    const tasks = await Task.all()
    return view.render('Estado.index', { Estado: tasks.toJSON() })
  }

  async store ({ request, response, session }) {
    // Validación para los datos de entrada
    const validation = await validate(request.all(), {
      nombre: 'required|min:3|max:255'
    })
  
    // Mostrar mensajes de error si falla la validación
    if (validation.fails()) {
      session.withErrors(validation.messages())
              .flashAll()
      return response.redirect('back')
    }
  
    // Guardar en la base de datos
    const task = new Task()
    
    task.nombre = request.input('nombre'),
    task.gobernador = request.input('gobernador'),
    task.entidad = request.input('entidad'),
    task.descripcion = request.input('descripcion')
    await task.save()
  
    // Guaradar mensaje de éxito
    session.flash({ notification: '¡Estado agregado con éxito!' })
  
    return response.redirect('back')
  }

  async destroy ({ params, session, response }) {
    const task = await Task.find(params.id)
    await task.delete()
    // Guaradar mensaje de éxito
    session.flash({ notification: '¡Estado eliminado con éxito!' })
    return response.redirect('back')
  }

}

module.exports = EstadoController
