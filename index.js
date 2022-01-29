function Contador()	{

    function adicionarContador()	{
        console.log('Adicionou!')
    }

    return (
        <div>
            <div>1</div>
            <button>Adicionar</button>
        </div>
    )
}

function Pagina() {
	return <Contador />
}