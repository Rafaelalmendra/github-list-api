function RepositoryItem(props) {
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