'use strict'
const Repuestos = use('App/Models/NewRepuesto')
const Hojas = use('App/Models/NewHojaDeParte')
const Mecanicos = use('App/Models/NewMecanicoResponsable')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
    /**
     * Show a list of all repuestos.
     * GET repuestos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let repuestos = await Repuestos.query().with('hoja').with('mecanico').fetch();
        let hojas = await Hojas.all();
        let mecanicos = await Mecanicos.all();
        return view.render('repuesto.index', { repuestos: repuestos.toJSON(), hojas: hojas.rows, mecanicos: mecanicos.rows })
    }

    /**
     * Render a form to be used for creating a new repuesto.
     * GET repuestos/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let mecanicos = Mecanicos.all();
        let hojas = Hojas.all();
        return view.render('repuesto.create', { mecanicos: mecanicos.rows, hojas: hojas.rows })
    }

    /**
     * Create/save a new repuesto.
     * POST repuestos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Repuestos.create(request.all())
        return response.redirect('/repuestos')
    }

    /**
     * Display a single repuesto.
     * GET repuestos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let repuestos = await Repuestos.find(params.id)
        return view.render('repuesto.show', repuestos)
    }

    /**
     * Render a form to update an existing repuesto.
     * GET repuestos/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let repuesto = await Repuestos.find(params.id)
        let mecanicos = Mecanicos.all();
        let hojas = Hojas.all();
        return view.render('respuesto.edit', { repuesto: repuesto, mecanicos: mecanicos.rows, hojas: hojas.rows })
    }

    /**
     * Update repuesto details.
     * PUT or PATCH repuestos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let repuesto = await Repuestos.find(params.id)
        repuesto.merge(request.all())
        await repuesto.save()
        return response.redirect('/repuesto')
    }

    /**
     * Delete a repuesto with id.
     * DELETE repuestos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let repuesto = await Repuestos.find(params.id)
        repuesto.delete()
        return response.redirect('/repuesto')
    }
}

module.exports = RepuestoController
