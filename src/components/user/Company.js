function Company({name,catchPhrase,bs}) {
    return (
        <div className={'company'}>
            <p>name: {name}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>
        </div>
    );
}

export default Company;