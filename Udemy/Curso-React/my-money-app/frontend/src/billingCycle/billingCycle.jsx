import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commom/template/contentheader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsheader'
import TabsContent from '../commom/tab/tabscontent'
import TabHeader from '../commom/tab/tabheader'
import TabContent from '../commom/tab/tabcontent'

import { create, update, remove, init } from './billingcycleaction'

import List from './billingcyclelist'
import Form from './billingcycleform'


class BillingCycle extends Component {
  componentWillMount() {
    this.props.init(this.props.userId)
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-0" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form 
                  onSubmit={this.props.create} 
                  submitClass="primary"
                  submitLabel="Incluir" />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form 
                  onSubmit={this.props.update} 
                  submitClass="info"
                  submitLabel="Alterar" />
              </TabContent>
              <TabContent id="tabDelete">
                <Form 
                  onSubmit={this.props.remove} 
                  readOnly={true} 
                  submitClass="danger"
                  submitLabel="Excluir"
                   />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ userId: state.auth.user._id })
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)