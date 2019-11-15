'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewHojaDeParte extends Model {
    factura() {
        return this.hasOne('App/Models/NewFactura')
    }
    mecanico() {
        return this.belongsTo('App/Models/NewMecanicoResponsable', 'id')
    }

    repuesto() {
        return this.hasMany('App/Models/NewRepuesto')
    }
}

module.exports = NewHojaDeParte
