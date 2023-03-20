import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente';
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<'tabela' | 'formulario'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Felipe', 33, '1'),
    new Cliente('Gabriela', 31, '2'),
    new Cliente('Zeno', 59, '3'),
    new Cliente('Thiago', 1, '4')
  ]


  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisible('tabela');
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`);
  }

  function editarCliente(cliente: Cliente) {
    setCliente(cliente);
    setVisible('formulario');
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisible('formulario');
  }

  return (
    <div className={
      `flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     `
    }>
      <Layout titulo="Cadastro Simples">
        {visible == 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4'
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}  clienteSelecionado={editarCliente} clienteExuclido={clienteExcluido}/>
          </>
        ) : (
            <>
              <Formulario cliente={cliente}
                clienteMudou={() => salvarCliente}
                cancelado={() => setVisible('tabela')} />
            </>
          )}
      </Layout>
    </div>
  )
}
