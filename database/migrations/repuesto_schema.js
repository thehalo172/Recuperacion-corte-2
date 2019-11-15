'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
    up() {
        this.create('repuestos', (table) => {
            table.increments()
            table.string('DESCRIPCION', 45).notNullable()
            table.integer('COSTOUNIT').notNullable()
            table.integer('PRECIOUNIT').notNullable()
            table.integer('IMP_PARCIAL').notNullable()
            table.integer('idHOJADEPARTE').unsigned().references('id').inTable('hoja_de_partes')
            table.integer('idMECANICODEPARTE').unsigned().references('id').inTable('mecanico_responsables')
            table.timestamps()
        })
    }

    down() {
        this.drop('repuestos')
    }
}

module.exports = RepuestoSchema
