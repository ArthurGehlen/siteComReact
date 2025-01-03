function Form() {
    function cadastrar_usuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário");
    }
    
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrar_usuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form