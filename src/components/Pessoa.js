import './Pessoa.module.css';

function Pessoa({ name, age, avatar }) {

    return (
        <div>
            <img src={avatar} alt={name} />
            <h2>Nome: {name}</h2>
            <p>age: {age}</p>
        </div>
    )

}

export default Pessoa