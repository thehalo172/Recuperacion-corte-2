'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('clientes', 'ClienteController.index')
Route.get('clientes/ver/:id', 'ClienteController.show')
Route.get('clientes/crear', 'ClienteController.create')
Route.post('clientes/crear', 'ClienteController.store')
Route.get('clientes/editar/:id', 'ClienteController.edit')
Route.post('clientes/editar/:id', 'ClienteController.update')
Route.get('clientes/eliminar/:id', 'ClienteController.destroy')

Route.get('factura', 'FacturaController.index')
Route.get('factura/ver/:id', 'FacturaController.show')
Route.get('factura/crear', 'FacturaController.create')
Route.post('factura/crear', 'FacturaController.store')
Route.get('factura/eliminar/:id', 'FacturaController.destroy')

Route.get('hoja_de_parte', 'HojaDeParteController.index')
Route.get('hoja_de_parte/ver/:id', 'HojaDeParteController.show')
Route.get('hoja_de_parte/crear', 'HojaDeParteController.create')
Route.post('hoja_de_parte/crear', 'HojaDeParteController.store')
Route.get('hoja_de_parte/editar/:id', 'HojaDeParteController.edit')
Route.post('hoja_de_parte/editar/:id', 'HojaDeParteController.update')
Route.get('hoja_de_parte/eliminar/:id', 'HojaDeParteController.destroy')

Route.get('mecanico_responsable', 'MecanicoResponsableController.index')
Route.get('mecanico_responsable/ver/:id', 'MecanicoResponsableController.show')
Route.get('mecanico_responsable/crear', 'MecanicoResponsableController.create')
Route.post('mecanico_responsable/crear', 'MecanicoResponsableController.store')
Route.get('mecanico_responsable/editar/:id', 'MecanicoResponsableController.edit')
Route.post('mecanico_responsable/editar/:id', 'MecanicoResponsableController.update')
Route.get('mecanico_responsable/eliminar/:id', 'MecanicoResponsableController.destroy')

Route.get('vehiculos', 'VehiculoController.index')
Route.get('vehiculos/ver/:id', 'VehiculoController.show')
Route.get('vehiculos/crear', 'VehiculoController.create')
Route.post('vehiculos/crear', 'VehiculoController.store')
Route.get('vehiculos/editar/:id', 'VehiculoController.edit')
Route.post('vehiculos/editar/:id', 'VehiculoController.update')
Route.get('vehiculos/eliminar/:id', 'VehiculoController.destroy')

Route.get('mecanico_vehiculo', 'MecanicoResponsableVehiculoController.index')
Route.get('mecanico_vehiculo/ver/:id', 'MecanicoResponsableVehiculoController.show')
Route.get('mecanico_vehiculo/crear', 'MecanicoResponsableVehiculoController.create')
Route.post('mecanico_vehiculo/crear', 'MecanicoResponsableVehiculoController.store')
Route.get('mecanico_vehiculo/editar/:id', 'MecanicoResponsableVehiculoController.edit')
Route.post('mecanico_vehiculo/editar/:id', 'MecanicoResponsableVehiculoController.update')
Route.get('mecanico_vehiculo/eliminar/:id', 'MecanicoResponsableVehiculoController.destroy')

Route.get('repuestos', 'RepuestoController.index')
Route.get('repuestos/ver/:id', 'RepuestoController.show')
Route.get('repuestos/crear', 'RepuestoController.create')
Route.post('repuestos/crear', 'RepuestoController.store')
Route.get('repuestos/editar/:id', 'RepuestoController.edit')
Route.post('repuestos/editar/:id', 'RepuestoController.update')
Route.get('repuestos/eliminar/:id', 'RepuestoController.destroy')
