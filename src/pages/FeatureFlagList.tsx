import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureFlagCard from '../components/FeatureFlagCard';
import Spinner from '../components/Spinner';
import CreateFeatureFlagModal from '../components/CreateFeatureFlagModal';
import { getAllFeatureFlags, createFeatureFlag, FeatureFlag } from '../services/api';
import { FaPlus } from 'react-icons/fa';

const FeatureFlagList: React.FC = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleCreateFlag = async (name: string, description: string) => {
    try {
      const userId = '';
      const body = {
        Name: name,
        Description: description,
        UserId: userId
      }
      await createFeatureFlag(body);
      const updatedFlags = await getAllFeatureFlags();
      setFeatureFlags(updatedFlags);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to create feature flag');
    }
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="mb-12 flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded flex items-center hover:bg-primary-dark  hover:shadow-lg"
          aria-label="Add feature flag"
        >
          <FaPlus className="mr-2" />
          Add Feature Flag
        </button>
      </div>

      <CreateFeatureFlagModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateFlag}
      />

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
