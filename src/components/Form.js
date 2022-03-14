import { useState } from "react"

function Form() {
    
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário!")
        console.log(`Usuário ${nome} foi cadastrado com a senha: ${senha}`)
    }


    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome"></label>
                    <input 
                    type="text"
                    id="nome"
                    name="nome" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha"></label>
                    <input 
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite a sua senha"
                    onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form