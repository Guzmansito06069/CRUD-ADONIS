'use strict'
const Task = use('App/Models/Articulo')

const { validate } = use('Validator')

class ProvedoreController {
    async index ({ view }) {
        const tasks = await Task.all()
        return view.render('Provedores.index', { Provedores: tasks.toJSON() })
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
        task.apellido = request.input('apellido'),
        task.direccion= request.input('direccion'),
        task.correo = request.input('correo'),
        task.edad = request.input('edad'),
        task.telefono = request.input('telefono'),
        task.estado_id = request.input('estado_id'),
        task.marca_id = request.input('marca_id')
        await task.save()
      
        // Guaradar mensaje de éxito
        session.flash({ notification: '¡Provedor agregado con éxito!' })
      
        return response.redirect('back')
      }
    
      async destroy ({ params, session, response }) {
        const task = await Task.find(params.id)
        await task.delete()
        // Guaradar mensaje de éxito
        session.flash({ notification: '¡Provedor eliminado con éxito!' })
        return response.redirect('back')
      }
    }
module.exports = ProvedoreController
