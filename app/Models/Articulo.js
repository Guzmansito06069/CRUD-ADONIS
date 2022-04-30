'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Articulo extends Model {
    marcas () {
        return this.hasMany('App/Models/Task')
      }
    categorias () {
        return this.hasMany('App/Models/Categoria')
      }

}

module.exports = Articulo
