import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
