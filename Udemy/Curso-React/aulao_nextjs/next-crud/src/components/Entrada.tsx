interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  readOnly?: boolean
  className?: string
  alterouValor?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className='mb-2'>
        {props.texto}
      </label>
      <input className={`
        border border-purple-500 border-round-lg
        focus:outline-none bg-gray-100
        ${props.readOnly ? '' : 'bg-white'}
        px-4 py-2 
      `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.readOnly}
        onChange={e => props.alterouValor?.(e.target.value)}
        />
    </div>
  )
}