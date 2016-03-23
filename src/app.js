import 'framework7'

export default class App {
  constructor () {
    new window.Framework7({
      router: false
    })
  }

  configureRouter (config, router) {
    config.map([
      { route: ['', 'todos'], name: 'todos', moduleId: './todos', nav: true, title: 'Todos' },
      { route: 'about', name: 'about', moduleId: './about', nav: true, title: 'About' }
    ])

    this.router = router
  }
}
