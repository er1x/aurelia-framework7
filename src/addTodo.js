import {inject} from 'aurelia-framework'
import Storage from './storage'

@inject(Storage)
export default class AddTodo {
  constructor (Storage) {
    this.todo = ''
    this.storage = Storage
  }

  addTodo () {
    this.storage.addTodo(this.todo)
    window.location.href = '#/todos'
  }
}
