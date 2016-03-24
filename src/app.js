import './framework7'

export default class App {

  configureRouter (config, router) {
    config.map([
      { route: ['', 'todos'], name: 'todos', moduleId: './todos', nav: true, title: 'Todos' },
      { route: 'todos/add', name: 'addtodo', moduleId: './addTodo' },
      { route: 'about', name: 'about', moduleId: './about', nav: true, title: 'About' }
    ])

    this.router = router
  }
}
