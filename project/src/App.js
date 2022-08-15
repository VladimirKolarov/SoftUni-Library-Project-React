import './reset.css';
import './App.css';

import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Books } from './components/Books/Books.js';


function App() {
    return (
        <div className="App">

            <Header />

            <Routes>
                <Route path="/" element={<Books/>}/>
                <Route path="/login" element={<h2> Login</h2>}/>
                <Route path="/Logout" element={<h2> Logout</h2>}/>
                <Route path="/register" element={<h2> Registration Page</h2>}/>
                <Route path="/mybooks" element={<h2> My Books</h2>}/>
                <Route path="*" element={<h2> 404 Page Not Found</h2>}/>

            </Routes>





        </div>
    );
}

export default App;
