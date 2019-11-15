'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewVehiculo extends Model {
    cliente() {
        return this.belongsTo('App/Models/NewCliente', 'id')
    }
    mecanico_vehiculo() {
        return this.hasMany('App/Models/NewMecanicoResponsableVehiculo')
    }
}

module.exports = NewVehiculo
