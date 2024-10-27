import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import Sidebar from './Sidebar';
import Adjuster from './Adjuster';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/adjust" element={ <Adjuster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
