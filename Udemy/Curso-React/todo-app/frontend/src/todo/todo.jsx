import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { timingSafeEqual } from 'crypto';

const URL = 'http://localhost:5027/api/todos'
const subItemsURL = 'http://localhost:5027/api/subItems'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.bindings = this.bindings.bind(this)
    this.bindings()
    this.addSubItem = true
    this.todo = {}
    this.scope = this

    this.refresh()
  }

  bindings() {
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleAddSubItem = this.handleAddSubItem.bind(this)
    this.refreshSubItems = this.refreshSubItems.bind(this)
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => {
        this.setState({ ...this.state, description, list: resp.data })
        this.refreshSubItems()
      })
  }

  refreshSubItems() {
    axios.get(`${subItemsURL}?sort=_taskId&=-createdAt`)
      .then(resp => {
        const subItems = resp.data
        let list = this.state.list
        let newList = []
        list.map(task => {
          task = { ...task, subItems: subItems.filter(subItem => subItem._taskId === task._id) }
          newList.push(task)
        })
        this.setState({ ...this.state, list: newList })
      })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => {
        this.refresh()
      })
  }

  handleChange(e) {
    this.setState({ description: e.target.value })
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => { this.refresh(this.state.description) })
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.addSubItem = true;
    this.refresh()
  }

  handleAddSubItem(todo) {
    const description = this.state.description
    if (this.addSubItem) {
      this.addSubItem = false
      this.todo = todo
      this.refresh()
    } else {
      this.addSubItem = true;
      axios.post(subItemsURL, { description, _taskId: this.todo._id })
        .then(resp => {
          this.refresh()
        }).catch(error => {
          console.log(error)
          console.log(error.response)
          console.log(error.request)
          console.log(error.message)
        })
    }
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={!this.handleAddSubItem ? this.handleAdd : this.handleAddSubItem}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          addSubItem={this.addSubItem} />
        <TodoList
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleAddSubItem={this.handleAddSubItem}
          list={this.state.list}
          addSubItem={this.addSubItem} />
      </div>
    )
  }
}