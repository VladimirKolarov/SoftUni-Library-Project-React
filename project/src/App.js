import './reset.css';
import './App.css';

import { Header } from './components/Header/Header';
import { Books } from './components/Books/Books.js';


function App() {
  return (
    <div className="App">

      <Header />
      <Books />

    </div>
  );
}

export default App;
