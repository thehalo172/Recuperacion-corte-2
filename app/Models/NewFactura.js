'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NewFactura extends Model {
    hoja() {
        return this.belongsTo('App/Models/NewHojaDeParte', 'id')
    }
}

module.exports = NewFactura
