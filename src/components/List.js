import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista de Marcas:</h1>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
                <Item marca="Renault" />
            </ul>
        </>
    )
}

export default List