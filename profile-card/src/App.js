import './App.css';
import me from './images/me.JPG';

const user = {
    firstName: 'Vlado',
    lastName: 'Cavric',
    position: 'FE Developer',
    location: 'Serbia',
    join: '18. Jun 2022',
    skills: ['HTML', 'CSS', 'SCSS', 'SASS', 'JavaScript', 'React',
        'Angular', 'Twig', 'EJS', 'NodeJS', 'SQL', 'MongoDB', 'Express', 'Drupal']
};

const skilss = (
    <div>
        {user.skills.map((skill) => <span className='skill'>{skill}</span> )}
    </div>
)

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className='header'>
                    <img src={me} alt="me"/>
                    <h3>{user.firstName}  {user.lastName} <span>&#x2713;</span></h3>
                    <p>{user.position}, {user.location}</p>
                </div>
                <section>
                    <p>skills</p>
                    {skilss}
                </section>
                <footer>
                    <p>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z"/></svg>
                        Joined on {user.join}
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;
