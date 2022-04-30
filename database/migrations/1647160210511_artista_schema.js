'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtistaSchema extends Schema {
  up () {
    this.create('artistas', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.text('descripcion')
      table.integer('correo').notNullable()
      table.string('edad') 
     
      table.timestamps()
    })
  }

  down () {
    this.drop('artistas')
  }
}

module.exports = ArtistaSchema
