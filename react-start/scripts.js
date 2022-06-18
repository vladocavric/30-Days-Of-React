// To get the root element from the HTML document
const rootElement = document.querySelector('.root');

// JSX element
const jsxElement = <h1>I am a JSX element</h1>;

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const authorFirstName = 'Asabeneh'
const authorLastName = 'Yetayeh'
const date = 'Oct 1, 2020'

// style
const headerStyles = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5
};

const header = (
    <header
        // style={headerStyles}
        // style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}

    >
        <div
            className="header-wrapper"
        >

        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{authorFirstName} {authorLastName}</p>
        <small>{date}</small>
        </div>
    </header>
);


const mainStyle = {
    backgroundColor: '#f3f0f5'
};

const techs = ['HTML', 'CSS', 'JavaScript']

const techsFormat = techs.map((tech, index) => <li key={index}>{tech}</li>)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1986
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const author = {
    firstName: 'Vlado',
    lastName: 'Cavric'
}
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

const main = (
    <main
        // style={mainStyle}

    >
        <div
            className="main-wrapper"
        >

            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>
                {techsFormat}
            </ul>
            {result}
            {personAge}
        </div>
    </main>
);


const footerStyle = {
    backgroundColor: '#61dbfb'
};
const footer = (
    <footer
        // style={footerStyle}

    >
        <div
            className="footer-wrapper"
        >

        <p>Copyright 2020</p>
        </div>
    </footer>
);

const app = (
    <div
        className="app"
    >
        {header}
        {main}
        {footer}
    </div>
);

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
ReactDOM.render(app, rootElement);
