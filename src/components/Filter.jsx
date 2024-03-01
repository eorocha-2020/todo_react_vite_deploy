const Filter = () => {
    return (
        <div className='filter'>
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select>
                        <option value="all">Todas</option>
                        <option value="completed">Completas</option>
                        <option value="incomplete">Incompletas</option>
                    </select>
                </div>
            </div>
            <p>Ordem alfabética:</p>
            <button>Asc</button>
            <button>Desc</button>
        </div>
    )
}

export default Filter