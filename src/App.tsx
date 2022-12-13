import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTODO from "./pages/AddTODO";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TodoList />} />
            <Route path="addtodo" element={<AddTODO />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
