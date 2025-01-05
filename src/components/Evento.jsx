import Button from "./Evento/Button";

function Evento() {
    function meu_evento() {
        console.log("Evento Disparado");
        // console.log(number);
    }

    function segundo_evento() {
        console.log('Ativando o segundo evento...');
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meu_evento} text="Primeiro Evento" />
            <Button event={segundo_evento} text="Primeiro Evento" />
        </div>
    )
}

export default Evento 