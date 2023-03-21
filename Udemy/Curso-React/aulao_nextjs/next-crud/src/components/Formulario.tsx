import Entrada from "./Entrada";
import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada 
          texto='Código' 
          valor={id} 
          readOnly 
          className='mb-4' />
      ) : false}
      <Entrada
        texto='Nome'
        className='mb-4'
        valor={nome}
        alterouValor={setNome} />
      <Entrada
        texto='Idade'
        tipo='number'
        valor={idade}
        alterouValor={setIdade} />
      <div className='flex justify-end mt-7'>
        <Botao cor="blue" className='mr-2' onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>{id ? 'Alterar' : 'Salvar'}</Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}