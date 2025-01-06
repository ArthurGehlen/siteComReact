import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [user_email, setUserEmail] = useState()

    function enviar_email(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(user_email)
    }

    function limpar_email() {
        setUserEmail("")
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="submit" onClick={enviar_email}>Enviar e-mail</button>
            </form>

            {user_email && (
                <div>
                    <p>O e-mail do usuário é: {user_email}</p>
                    <button onClick={limpar_email}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional