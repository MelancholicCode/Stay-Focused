import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TodoPage from "./pages/TodoPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/todo/*" element={<TodoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
