'use strict'
const MecanicoResponsableVehiculos = use('App/Models/NewMecanicoResponsableVehiculo')
const Mecanicos = use('App/Models/NewMecanicoResponsable')
const Vehiculos = use('App/Models/NewVehiculo')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoresponsablevehiculos
 */
class MecanicoResponsableVehiculoController {
    /**
     * Show a list of all mecanicoresponsablevehiculos.
     * GET mecanicoresponsablevehiculos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let mecanico_vehiculos = await MecanicoResponsableVehiculos.query().with('mecanico').with('vehiculo').fetch()
        let mecanicos = await Mecanicos.all();
        let vehiculos = await Vehiculos.query().with('cliente').fetch()
        return view.render('mecanico_responsable_vehiculos.index', { mecanico_vehiculos: mecanico_vehiculos.toJSON(), mecanicos: mecanicos.rows, vehiculos: vehiculos.toJSON() })
    }

    /**
     * Render a form to be used for creating a new mecanicoresponsablevehiculo.
     * GET mecanicoresponsablevehiculos/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let mecanicos = await Mecanicos.all();
        let vehiculos = await Vehiculos.all();
        return view.render('mecanico_responsable_vehiculos.create', { mecanicos: mecanicos.rows, vehiculos: vehiculos.rows })
    }

    /**
     * Create/save a new mecanicoresponsablevehiculo.
     * POST mecanicoresponsablevehiculos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await MecanicoResponsableVehiculos.create(request.all())
        return response.redirect('/mecanico_vehiculo')
    }

    /**
     * Display a single mecanicoresponsablevehiculo.
     * GET mecanicoresponsablevehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let mecanicoresponsablevehiculos = await MecanicoResponsableVehiculos.find(params.id)
        return view.render('mecanico_responsable_vehiculos.show', mecanicoresponsablevehiculos)
    }

    /**
     * Render a form to update an existing mecanicoresponsablevehiculo.
     * GET mecanicoresponsablevehiculos/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let mecanico_vehiculo = await MecanicoResponsableVehiculos.find(params.id)
        let mecanicos = await Mecanicos.all();
        let vehiculos = await Vehiculos.all();
        return view.render('mecanico_responsable_vehiculos.edit', { mecanico_vehiculo: mecanico_vehiculo, mecanicos: mecanicos.rows, vehiculos: vehiculos.rows })
    }

    /**
     * Update mecanicoresponsablevehiculo details.
     * PUT or PATCH mecanicoresponsablevehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let mecanico_vehiculo = await MecanicoResponsableVehiculos.find(params.id)
        mecanico_vehiculo.merge(request.all())
        await mecanico_vehiculo.save()
        return response.redirect('/mecanico_vehiculo')
    }

    /**
     * Delete a mecanicoresponsablevehiculo with id.
     * DELETE mecanicoresponsablevehiculos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let mecanico_vehiculo = await MecanicoResponsableVehiculos.find(params.id)
        mecanico_vehiculo.delete()
        return response.redirect('/mecanico_vehiculo')
    }
}

module.exports = MecanicoResponsableVehiculoController
