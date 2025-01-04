import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeatureFlagList from './pages/FeatureFlagList';
import FeatureFlagDetails from './pages/FeatureFlagDetails';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/featureFlag"
            element={
              <ProtectedRoute>
                <FeatureFlagList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/featureFlag/:id"
            element={
              <ProtectedRoute>
                <FeatureFlagDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
