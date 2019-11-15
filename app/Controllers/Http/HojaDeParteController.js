'use strict'
const HojaDePartes = use('App/Models/NewHojaDeParte')
const Mecanicos = use('App/Models/NewMecanicoResponsable')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojadepartes
 */
class HojaDeParteController {
    /**
     * Show a list of all hojadepartes.
     * GET hojadepartes
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let hojas = await HojaDePartes.query().with('mecanico').fetch();
        let mecanicos = await Mecanicos.all()
        return view.render('hoja_de_parte.index', { hojas: hojas.toJSON(), mecanicos: mecanicos.rows })
            //return response.json({ hojas: hojas.rows });
    }

    /**
     * Render a form to be used for creating a new hojadeparte.
     * GET hojadepartes/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let mecanicos = await Mecanicos.all();
        return view.render('hoja_de_parte.create', { mecanicos: mecanicos.rows })
    }

    /**
     * Create/save a new hojadeparte.
     * POST hojadepartes
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await HojaDePartes.create(request.all())
        return response.redirect('/hoja_de_parte')
    }

    /**
     * Display a single hojadeparte.
     * GET hojadepartes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        let hojas = await HojaDePartes.find(params.id)
        return view.render('hoja_de_parte.show', hojas)
    }

    /**
     * Render a form to update an existing hojadeparte.
     * GET hojadepartes/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let hoja = await HojaDePartes.find(params.id)
        let mecanicos = await Mecanicos.all()
        return view.render('hoja_de_parte.edit', { hoja: hoja, mecanicos: mecanicos.rows })
    }

    /**
     * Update hojadeparte details.
     * PUT or PATCH hojadepartes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let hoja = await HojaDePartes.find(params.id)
        hoja.merge(request.all())
        await hoja.save()
        return response.redirect('/hoja_de_parte')
    }

    /**
     * Delete a hojadeparte with id.
     * DELETE hojadepartes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let hoja = await HojaDePartes.find(params.id)
        hoja.delete()
        return response.redirect('/hoja_de_parte')
    }
}

module.exports = HojaDeParteController
