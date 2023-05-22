import "./App.css";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <ToDoList />
    </div>
  )
}

export default App;
