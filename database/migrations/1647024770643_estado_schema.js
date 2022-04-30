'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstadoSchema extends Schema {
  up () {
    this.create('estados', (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable().unique()
      table.string('gobernador').notNullable().unique()
      table.string('entidad').notNullable().unique()
      table.text('descripcion')//Alguna descripcion del Estado
      table.timestamps()
    })
  }

  down () {
    this.drop('estados')
  }
}

module.exports = EstadoSchema
