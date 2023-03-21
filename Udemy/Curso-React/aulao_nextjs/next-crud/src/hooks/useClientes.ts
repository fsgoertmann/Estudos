import { useEffect } from 'react';
import { useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTabOrFomr from './useTabOrForm';

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const { formularioVisivel,
        tabelaVisivel,
        exibirTabela,
        exibirForm, } = useTabOrFomr();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        });
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos();
    }

    function editarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirForm();
    }

    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirForm();
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        editarCliente,
        obterTodos,
        clientes,
        cliente,
        tabelaVisivel,
        exibirTabela,
    }
}