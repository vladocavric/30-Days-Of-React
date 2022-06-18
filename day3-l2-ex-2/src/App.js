import './App.css';



function App() {
  return (
    <div className="App">
    <h1>subscribe</h1>
    <p>sign up with your email address to receive news and updates</p>
    <form>
      <div className="form-group">
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="email" placeholder='Email'/>
      </div>
      <input type="submit" />
    </form>
    
    </div>
  );
}

export default App;
