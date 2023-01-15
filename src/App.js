import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 768px)'});
  console.log(isTabletOrMobile);
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />}/>
          <Route path="/todo/*" element={<TodoPage/>}/>
          <Route path="/404" element={<ErrorPage/>}/>
          <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
