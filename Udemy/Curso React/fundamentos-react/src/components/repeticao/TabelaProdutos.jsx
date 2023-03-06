import "./TabelaProdutos.css";
import React from 'react';
import produtos from '../../data/Produtos';

export default props => {

  const tabelaProdutos = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td> R$ {produto.preco.toFixed(2)}</td>
      </tr>)
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {tabelaProdutos}
        </tbody>
      </table>
    </div>
  )
}