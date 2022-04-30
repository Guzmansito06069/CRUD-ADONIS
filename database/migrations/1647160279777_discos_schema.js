'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscosSchema extends Schema {
  up () {
    this.create('discos', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.text('descripcion')
      table.timestamps()
    })
  }

  down () {
    this.drop('discos')
  }
}

module.exports = DiscosSchema
