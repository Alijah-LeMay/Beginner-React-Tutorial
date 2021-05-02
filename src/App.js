import "./App.css"
import Hello from "./components/Hello"
import Turtle from "./components/Turtle"
import MyList from "./components/MyList"
import MyForm from "./components/MyForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello name="John" /> */}
        <Turtle />
        {/* <MyList /> */}
        <MyForm />
      </header>
    </div>
  )
}

export default App
