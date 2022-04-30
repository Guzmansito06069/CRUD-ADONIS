'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  articulo () {
    return this.belongsTo('App/Models/Articulo')
  }
}

module.exports = Task
