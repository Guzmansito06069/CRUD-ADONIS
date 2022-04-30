'use strict'
const Task = use('App/Models/Categoria')
const { validate } = use('Validator')
class CategoriaController {
    async index ({ view }) {
        const tasks = await Task.all()
        return view.render('Cate.index', { Cate: tasks.toJSON() })
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
        task.nombre = request.input('nombre')
        task.descripcion = request.input('descripcion')
        await task.save()
      
        // Guaradar mensaje de éxito
        session.flash({ notification: '¡Categoria agregada con éxito!' })
      
        return response.redirect('back')
      }
      async destroy ({ params, session, response }) {
          const task = await Task.find(params.id)
          await task.delete()
          // Guaradar mensaje de éxito
          session.flash({ notification: '¡Categoria eliminada con éxito!' })
          return response.redirect('back')
        }
      async update({ params, session, response }) {
        const task = await Task.find(params.id)
        task.nombre = request.input('nombre')
        task.descripcion = request.input('descripcion')
        await user.save()
  

      }
      }
 
module.exports = CategoriaController
