import './app-filter.css'

const AppFilter = (props) =>{

    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'update', label: 'На повышение'},
        {name: 'more1000', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light' 
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                    {label}
            </button>
        )
    })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
}

export default AppFilter;