function Evento({ number }) {
    function meu_evento() {
        // console.log("Evento Disparado");
        console.log(number);
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meu_evento}>Ativar</button>
        </div>
    )
}

export default Evento 