import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App'

function Subject() {
  return (
    <div>
        <header>

        </header>

        <main>
        <p>paragraph </p>
        <Routes>
            
            <Route path="/app" element={<App />} />
          </Routes>
        </main>

        <footer></footer>
      <script src="script.js"></script>
    </div>
  );
}

export default Subject;
