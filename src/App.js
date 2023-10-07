import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import AddForm from './Pages/AddForm';
import Form from './Pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-form' element={<AddForm />} />
          <Route path='/form/:id' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
