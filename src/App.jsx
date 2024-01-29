import './App.css'
import Card from "./components/Card.jsx"
import Nav from "./components/Nav.jsx"
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
        <Nav />
        <main>
          {cards}
        </main>
    </div>
  )
}

export default App
