const ResourceList = (props) => {
    const resources = props.resources;

    return (
        <div className="resource-list">
            {resources.map((resource) => (
                <div className="resource-preview" key={ resource.id}>
                    <h2>{ resource.title }</h2>
                    <p>{resource.body}</p>
                    <a href= { resource.url } > <button type="button"> Visit Here </button> </a> 
                </div>
            ))}
        </div>
    );
}

export default ResourceList