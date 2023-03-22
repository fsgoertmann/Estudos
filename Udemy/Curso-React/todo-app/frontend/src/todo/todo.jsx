import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { timingSafeEqual } from 'crypto';

const URL = 'http://localhost:5027/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.bindings = this.bindings.bind(this)
    this.bindings();

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
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => {
        this.setState({...this.state, description, list: resp.data})
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
      .then(resp => {this.refresh(this.state.description)})
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
      .then(() => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
      .then(() => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm 
          description={this.state.description} 
          handleChange={this.handleChange} 
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <TodoList 
          handleRemove={this.handleRemove} 
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          list={this.state.list} />
      </div>
    )
  }
}