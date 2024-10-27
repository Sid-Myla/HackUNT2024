import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import Sidebar from './Sidebar';
import Adjuster from './Adjuster';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/adjust" element={ <Adjuster />} />
        </Routes>
      </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
