export default class Storage {
  constructor () {
    let todosString = window.localStorage.getItem('todos')
    if (!todosString) {
      this.todos = []
    } else {
      this.todos = JSON.parse(todosString)
    }
  }

  addTodo (title) {
    this.todos.push({
      title: title,
      done: false,
      id: this.todos.length
    })
    this.save()
  }

  removeTodo (id) {
    this.todos.forEach((todo, index) => {
      if (todo.id === id) {
        this.todos.splice(index, 1)
      }
    })
    this.save()
  }

  save () {
    window.localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
