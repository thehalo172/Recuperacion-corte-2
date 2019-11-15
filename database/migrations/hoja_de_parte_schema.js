'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojaDeParteSchema extends Schema {
    up() {
        this.create('hoja_de_partes', (table) => {
            table.increments()
            table.string('CONCEPTO', 45).notNullable()
            table.integer('CANTIDAD', 11).notNullable()
            table.string('REPARACION', 45).notNullable()
            table.integer('idMECANICORESPONSABLE').unsigned().references('id').inTable('mecanico_responsables')
            table.timestamps()
        })
    }

    down() {
        this.drop('hoja_de_partes')
    }
}

module.exports = HojaDeParteSchema
