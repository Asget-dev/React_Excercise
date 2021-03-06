const title = 'My First React Element';
const desc = 'I just learned how to create a React node and render it into DOM.';
const myTitleID = 'main-title';




const header = (
    <header> 
        <h1 id={myTitleID}>{title}</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);