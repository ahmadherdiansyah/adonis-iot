'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('f_name', 254).notNullable()
      table.string('l_name', 254).nullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('profile_picture').nullable()
      table.timestamps()
      table.datetime('deleted_at').nullable()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
