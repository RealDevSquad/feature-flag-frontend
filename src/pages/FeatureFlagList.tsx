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
        setError(null);
        const data = await getAllFeatureFlags();
        setFeatureFlags(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch feature flags',
        );
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
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Feature Flags</h1>
      </div>

      {error && (
        <div className="mb-8 rounded-lg bg-red-50 p-4 text-center text-red-600">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
