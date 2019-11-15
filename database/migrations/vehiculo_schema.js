'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculoSchema extends Schema {
    up() {
        this.create('vehiculos', (table) => {
            table.increments()
            table.string('MODELO', 45).notNullable();
            table.string('COLOR', 45).notNullable();
            table.datetime('FECHA_ENT').notNullable();
            table.time('HORA_ENT').notNullable();
            table.integer('CLIENTE_id').unsigned().references('id').inTable('clientes')
            table.timestamps()
        })
    }

    down() {
        this.drop('vehiculos')
    }
}

module.exports = VehiculoSchema
