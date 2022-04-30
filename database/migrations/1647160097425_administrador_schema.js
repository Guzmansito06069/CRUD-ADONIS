'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministradorSchema extends Schema {
  up () {
    this.create('administradors', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('clave').notNullable().unique
    })
  }

  down () {
    this.drop('administradors')
  }
}

module.exports = AdministradorSchema
