import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha lista</h1>
                <ul>
                    <Item marca='Ferrari' ano_lancamento={2000}/>
                    <Item marca='Gol' ano_lancamento={2002}/>
                    <Item marca={'Hello'} ano_lancamento={2000}/>
                    <Item />
                </ul>
        </>
    )
}
export default List;