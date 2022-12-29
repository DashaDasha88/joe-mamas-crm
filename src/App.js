import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
