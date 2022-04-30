'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
    table.increments('id')
    table.string('nombre').notNullable().unique()
    table.string('descripcion').notNullable()
    table.timestamps()

    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
