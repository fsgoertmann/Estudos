import Navegador from '../components/Navegador'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador destino='/estiloso' texto='Estiloso' cor='crimson'/>
      <Navegador destino='/exemplo' texto='Exemplo' cor='#9400d3'/>
      <Navegador destino='/navegacao' texto='Navegação #01' cor='green'/>
      <Navegador destino='/cliente/sc-2/123' texto='Navegação #02' cor='blue'/>
      <Navegador destino='/estado' texto='Componente com Estado' cor='red'/>
      <Navegador destino='/integracao' texto='Integração com API #01' cor='purple'/>
      <Navegador destino='/estatico' texto='Conteúdo Estático' cor='#a6d4f3'/>
    </div>
  )
}