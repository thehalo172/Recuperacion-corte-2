'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewCliente extends Model {
    vehiculo() {
        return this.hasMany('App/Models/NewVehiculo')
    }
}

module.exports = NewCliente
