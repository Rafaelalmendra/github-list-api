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
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description ?? 'Sem descrição'}</p>

            <a href={props.repository.html_url} target='_blank' rel='noreferrer'>
                Acessar repositório
            </a>
        </li>
    )
};

export default RepositoryItem;