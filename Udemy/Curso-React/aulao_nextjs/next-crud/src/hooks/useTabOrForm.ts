import { useState } from 'react';

export default function useTabOrFomr () {
    const [visible, setVisible] = useState<'tabela' | 'formulario'>('tabela')

    const exibirTabela = () => setVisible('tabela');
    const exibirForm = () => setVisible('formulario');

    return {
        formularioVisivel: visible === 'formulario',
        tabelaVisivel: visible === 'tabela',
        exibirTabela,
        exibirForm,
    }
}