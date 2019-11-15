'use strict'
const Facturas = use('App/Models/NewFactura')
const Hojas = use('App/Models/NewHojaDeParte')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with facturas
 */
class FacturaController {
    /**
     * Show a list of all facturas.
     * GET facturas
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let facturas = await Facturas.query().with('hoja').fetch();
        let hojas = await Hojas.all();
        return view.render('factura.index', { facturas: facturas.toJSON() }, { hojas: hojas.rows })
    }

    /**
     * Render a form to be used for creating a new factura.
     * GET facturas/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let hojas = await Hojas.all();
        return view.render('factura.create', { hojas: hojas.rows })
    }

    /**
     * Create/save a new factura.
     * POST facturas
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Facturas.create(request.all())
        return response.redirect('/factura')
    }

    /**
     * Display a single factura.
     * GET facturas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let factura = await Facturas.find(params.id)
        return view.render('factura.show', factura)
    }

    /**
     * Render a form to update an existing factura.
     * GET facturas/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update factura details.
     * PUT or PATCH facturas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a factura with id.
     * DELETE facturas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let factura = await Facturas.find(params.id)
        factura.delete()
        return response.redirect('/factura')
    }
}

module.exports = FacturaController
