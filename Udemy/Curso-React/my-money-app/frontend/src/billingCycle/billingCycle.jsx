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

import { selectTab, showTabs } from '../commom/tab/tabactions'
import { create } from './billingcycleaction'

import List from './billingcyclelist'
import Form from './billingcycleform'


class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
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
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form />
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)