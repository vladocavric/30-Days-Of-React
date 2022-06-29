import './App.css';

const hexColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const colors = []

for (let i = 0; i < 25; i++) { colors.push(hexColor()) }


function App() {
  console.log(colors)
  return (
    <div>
      {colors.map(color => <div style={{ backgroundColor: color, padding: 15 }}>{color}</div>)}
    </div>
  );
}

export default App;
