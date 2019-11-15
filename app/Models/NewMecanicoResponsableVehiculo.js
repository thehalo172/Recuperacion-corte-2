'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewMecanicoResponsableVehiculo extends Model {
    mecanico() {
        return this.belongsTo('App/Models/NewMecanicoResponsable', 'id')
    }
    vehiculo() {
        return this.belongsTo('App/Models/NewVehiculo', 'id')
    }
}

module.exports = NewMecanicoResponsableVehiculo
