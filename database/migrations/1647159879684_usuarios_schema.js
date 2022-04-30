'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.text('apellido')
      table.integer('clave').notNullable()
      table.string('email').notNullable().unique
      table.string('telefono') 
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
