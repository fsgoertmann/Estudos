import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentheader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsheader'
import TabsContent from '../commom/tab/tabscontent'
import TabHeader from '../commom/tab/tabheader'

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"/>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-0" target="tabDelete" />
            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle