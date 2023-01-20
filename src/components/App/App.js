import Header from "../Header/Header";
import ErrorPage from "../../pages/ErrorPage";
import TimerPage from "../../pages/TimerPage";
import TodoPage from "../../pages/TodoPage";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />}/>
          <Route path="/todo/*" element={<TodoPage/>}/>
          <Route path="/timer" element={<TimerPage/>}/>
          <Route path="/404" element={<ErrorPage/>}/>
          <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
