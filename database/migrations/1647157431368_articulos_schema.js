'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticulosSchema extends Schema {
  up () {
    this.create('articulos', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.text('descripcion')
      table.integer('precio').notNullable()
      table.string('color') 
      table.integer('idc').unsigned().references('id').inTable('tasks')
      table.integer('idm').unsigned().references('id').inTable('categorias')
      table.timestamps()
    })
  }

  down () {
    this.drop('articulos')
  }
}

module.exports = ArticulosSchema
