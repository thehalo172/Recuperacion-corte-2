'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoResponsableVehiculoSchema extends Schema {
    up() {
        this.create('mecanico_responsable_vehiculos', (table) => {
            table.increments();
            table.integer('idMECANICO').unsigned().references('id').inTable('mecanico_responsables')
            table.integer('idVEHICULO').unsigned().references('id').inTable('vehiculos')
            table.timestamps()
        })
    }

    down() {
        this.drop('mecanico_responsable_vehiculos')
    }
}

module.exports = MecanicoResponsableVehiculoSchema
