'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('type', 60).notNullable()
      table.timestamps()
      table.datetime('deleted_at').nullable()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DeviceSchema
