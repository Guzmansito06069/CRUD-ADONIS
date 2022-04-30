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
Route.post('/login', 'AuthController.login')
Route.resource('users','UserController')
.apiOnly()
.validator(new Map([
    [['users.store'],['StoreUser']]
]))

Route.get('/', 'TaskController.index')
Route.post('tasks', 'TaskController.store')
Route.delete('tasks/:id', 'TaskController.destroy')


Route.get('/m', 'CategoriaController.index')
Route.post('Cate', 'CategoriaController.store')
Route.delete('Cate/:id', 'CategoriaController.destroy')


Route.get('/g', 'EstadoController.index')
Route.post('Estado', 'EstadoController.store')
Route.delete('Estado/:id', 'EstadoController.destroy')

Route.get('/e', 'ArticuloController.index')
Route.post('instrumentos', 'ArticuloController.store')
Route.delete('instrumentos/:id', 'ArticuloController.destroy')
Route.patch('instrumentose/:id','ArticuloController.update')