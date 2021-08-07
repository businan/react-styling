import '../../sass/style.scss'

const Sassy = () => {
    return (
        <div className="container">
            <h1>Sassy in React</h1>
            <p>
                Sass (Syntactically Awesome Style Sheets) is a CSS extension
                that gives you more powerful CSS.
            </p>
            <div className="button-container">
                <button className='button button-container--small'>Small</button>
                <button className='button button-container--large'>Large</button>
            </div>
        </div>
    );
};

export default Sassy;
