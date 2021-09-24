interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <h3>{props.repository.name}</h3>

            <p>{props.repository.description ?? 'Sem descrição'}</p>
            
            <a href={props.repository.html_url} target='_blank' rel='noreferrer'>
                <button>Acessar repositório</button> 
            </a>
        </li>
    )
};

export default RepositoryItem;