import style from './Pessoa.module.css';

function Pessoa({ name, age, avatar }) {

    return (
        <div className={style.Card}>
            <img src={avatar} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
        </div>
    )

}

export default Pessoa