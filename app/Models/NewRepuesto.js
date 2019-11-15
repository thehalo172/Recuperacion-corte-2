'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewRepuesto extends Model {
    hoja() {
        return this.belongsTo('App/Models/NewHojaDeParte', 'id')
    }
    mecanico() {
        return this.belongsTo('App/Models/NewMecanicoResponsable', 'id')
    }
}

module.exports = NewRepuesto
