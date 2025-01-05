import { useState } from 'react'
 
function Form() {
    function cadastrar_usuario(e) {
        e.preventDefault()
        console.log("Usuário cadastrado!");
        console.log(`Usuário: ${name}`);
        console.log(`Senha: ${password}`);
    }

    // const [name, setName] = useState('Arthur')
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrar_usuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome" 
                        autoComplete='off'
                        // value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="name">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
