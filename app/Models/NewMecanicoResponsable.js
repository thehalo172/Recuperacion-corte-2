'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewMecanicoResponsable extends Model {
    hoja() {
        return this.hasMany('App/Models/NewHojaDeParte')
    }
    mecanico_vehiculo() {
        return this.hasMany('App/Models/NewMecanicoResponsableVehiculo')
    }
}

module.exports = NewMecanicoResponsable
