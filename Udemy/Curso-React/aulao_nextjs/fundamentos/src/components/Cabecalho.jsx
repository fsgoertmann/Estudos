import Layout from "./Layout"

export default function Cabecalho(props) {
    console.log(props.titulo)
    return (
        <Layout titulo='Usando Componentes'>
            <h1>{props.titulo}</h1>
        </Layout>
    )
}