'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacturaSchema extends Schema {
    up() {
        this.create('facturas', (table) => {
            table.increments()
            table.datetime('FECHA').notNullable();
            table.integer('IMP_PESOS').notNullable()
            table.integer('IMP_DOL').notNullable()
            table.integer('RFC').notNullable()
            table.integer('idHOJAPARTE').unsigned().references('id').inTable('hoja_de_partes')
            table.timestamps()
        })
    }

    down() {
        this.drop('facturas')
    }
}

module.exports = FacturaSchema
