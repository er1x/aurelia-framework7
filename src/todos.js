import {inject} from 'aurelia-framework'
import Storage from './storage'

@inject(Storage)
export default class Todos {
  constructor (Storage) {
    this.storage = Storage
    this.todos = Storage.todos
  }

  removeTodo (todo) {
    this.storage.removeTodo(todo.id)
  }

  toggleDone (todo) {
    this.storage.save()
  }
}
