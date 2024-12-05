import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeatureFlagList from './pages/FeatureFlagList';
import FeatureFlagDetails from './pages/FeatureFlagDetails';
import Landing from './pages/Landing';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/featureFlag" element={<FeatureFlagList />} />
        <Route path="/featureFlag/:id" element={<FeatureFlagDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
