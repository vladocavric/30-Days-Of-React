import React from 'react';
// import RectDOM from 'react-dom'
import {createRoot} from 'react-dom/client';
import createApp from './images/create_react_app_files.png'

// const headerStyles = {
//     backgroundColor: '#61dbfb',
//     fontFamily: 'Helvetica Neue',
//     padding: 25,
//     lineHeight: 1.5
// }

const wilcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    fistName: 'Vlado',
    lastName: 'Cavric'
}

const date = 'Oct 2, 2020'


const header = (
    <header className='header-wrapper'>
        <h1>{wilcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{author.fistName} {author.lastName}</p>
        <small>{date}</small>
    </header>

);

const numOne = 15
const numTwo = 32
const result = (
    <div>
        {numOne} - {numTwo} = {numOne - numTwo}
    </div>
)

const img = (
    <div>
        <img src={createApp} width='350px' alt="crateApp"/>
    </div>
)

const yearOfBerth = 1986
const currentYear = new Date().getFullYear()
const age = currentYear - yearOfBerth
const personAge = (
    <div>
        {''}
        {author.fistName} {author.lastName} is {age} years old
    </div>
)


const main = (
    <main>
        <div className='main-wrapper'>

        <p>Prerequisite to get started react.js:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
            {result}
            {personAge}
            {img}
        </div>
    </main>
)

const copy = `Copyright ${currentYear}`
// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>

        <p>{copy}</p>
        </div>
    </footer>
)


const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
    );


createRoot(document.getElementById('root')).render(app);
