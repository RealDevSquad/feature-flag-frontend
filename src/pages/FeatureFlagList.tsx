import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureFlagCard from '../components/FeatureFlagCard';
import Spinner from '../components/Spinner';
import { getAllFeatureFlags, FeatureFlag } from '../services/api';

const FeatureFlagList: React.FC = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        setIsLoading(true);
        const data = await getAllFeatureFlags();
        setFeatureFlags(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch feature flags');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatureFlags();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/featureFlag/${id}`);
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Feature Flags</h1>
      </div>
      
      {error && (
        <div className="text-center text-red-600 mb-8 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureFlags.map((flag) => (
            <FeatureFlagCard 
              key={flag.id} 
              flag={flag} 
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureFlagList;
