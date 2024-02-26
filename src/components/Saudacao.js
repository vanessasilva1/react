function Saudacao({ novo_nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <>{novo_nome && <p>{gerarSaudacao(novo_nome)}</p>}</>
    )

}

export default Saudacao