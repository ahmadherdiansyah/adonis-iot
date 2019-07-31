'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TopicsSchema extends Schema {
  up () {
    this.create('topics', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('device_id').unsigned().references('id').inTable('devices')
      table.string('topic', 60).notNullable().unique()
      table.string('code',254).notNullable()
      table.timestamps()
      table.datetime('deleted_at').nullable()
    })
  }

  down () {
    this.drop('topics')
  }
}

module.exports = TopicsSchema
