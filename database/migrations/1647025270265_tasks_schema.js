'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments('id')
      table.string('nombre').notNullable().unique()
      table.string('descripcion').notNullable().unique()
      table.timestamps()

    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
