import'./Variable.css'

function Variable({type, name, value, setValue}) {

    return (
        <div className='counter-container'>
            <h3 className='tatle'>{name || "VARIABLE"}</h3>
            <div className="controls">
                <button className='btn btn-danger' onClick={() =>setValue(value - 1)}>-</button>
                <span className='name'>{type && type === 'int' ? value.toFixed(2) : value.toFixed(2)}</span>
                <button className='btn btn-success' onClick={() =>setValue(value + 1)}>+</button>
            </div>
        </div>
    );
}

export default Variable;