import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        //console.log(name)
        console.log(`Usuário ${name} foi cadastradoo com a senha: ${password}`)
    }

    const [name, setName] = useState('Vanessa')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name"></label>
                <div>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome:" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha:" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;