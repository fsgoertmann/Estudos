import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {
    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(0)

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    return (
        <Layout titulo='Integração com API #01'>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Dados</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Idade: {cliente.idade}</li>
            </ul>
        </Layout>
    )
}