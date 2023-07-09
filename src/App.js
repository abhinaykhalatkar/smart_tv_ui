
import './App.scoped.scss';
import RouteMap from './Router/router';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
<Router>
    <Routes>
      {RouteMap().map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
  );
}

export default App;
