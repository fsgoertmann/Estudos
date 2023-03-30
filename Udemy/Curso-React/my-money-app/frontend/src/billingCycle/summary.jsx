import React, { Component } from 'react'
import Grid from '../commom/layout/grid'
import Row from '../commom/layout/row'
import Valuebox from '../commom/widget/valuebox'

export default ({ credit, debt }) => (
    <Grid cols="12">
        <fieldset>Resumo</fieldset>
        <Row>
            <Valuebox cols="12 4" color="green" icon="bank" value={`R$${credit}`} text="Total de Crédito" />
            <Valuebox cols="12 4" color="red" icon="credit-card" value={`R$${debt}`} text="Total de Débitos" />
            <Valuebox cols="12 4" color="blue" icon="money" value={`R$${credit - debt}`} text="Valor Consolidado" />
        </Row>
    </Grid>
)