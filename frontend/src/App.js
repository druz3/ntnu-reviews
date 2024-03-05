import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Subject from './Subject';

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav>
            <Link to="/" id="logo">NTNU Reviews</Link>

            <Link to="/subject">Info</Link> 

          </nav>
        </header> 
 
        <main>
          
          <Routes>
            <Route path="/" element={
            <div id="search-container">
            <input
              className="box"
              id="search"
              type="text" 
              placeholder="Search Subject: "
            />
          </div>} />

            <Route path="/subject" element={<Subject />} />
          </Routes>
        </main>
        <footer></footer>
      </Router>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
