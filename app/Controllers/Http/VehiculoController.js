'use strict'
const Vehiculos = use('App/Models/NewVehiculo')
const Clientes = use('App/Models/NewCliente')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vehiculos
 */
class VehiculoController {
    /**
     * Show a list of all vehiculos.
     * GET vehiculos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let vehiculos = await Vehiculos.query().with('cliente').fetch();
        let clientes = await Clientes.all();
        return view.render('vehiculos.index', { vehiculos: vehiculos.toJSON(), clientes: clientes.rows });
    }

    /**
     * Render a form to be used for creating a new vehiculo.
     * GET vehiculos/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let clientes = await Clientes.all();
        return view.render('vehiculos.create', { clientes: clientes.rows })
    }

    /**
     * Create/save a new vehiculo.
     * POST vehiculos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Vehiculos.create(request.all())
        return response.redirect('/vehiculos')
    }

    /**
     * Display a single vehiculo.
     * GET vehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let vehiculos = await Vehiculos.find(params.id);
        return view.render('vehiculos.show', vehiculos);
    }

    /**
     * Render a form to update an existing vehiculo.
     * GET vehiculos/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let vehiculo = await Vehiculos.find(params.id);
        let vehiculos = await Vehiculos.query().with('cliente').fetch();
        return view.render('vehiculos.edit', { vehiculo: vehiculo, vehiculos: vehiculos.toJSON() })
    }

    /**
     * Update vehiculo details.
     * PUT or PATCH vehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let vehiculo = await Vehiculos.find(params.id);
        vehiculo.merge(request.all());
        await vehiculo.save();
        return response.redirect('/vehiculos')
    }

    /**
     * Delete a vehiculo with id.
     * DELETE vehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let vehiculo = await Vehiculos.find(params.id);
        vehiculo.delete();
        return response.redirect('/vehiculos')
    }
}

module.exports = VehiculoController
