import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Spinner from '../components/Spinner';
import { toast } from 'react-hot-toast';

interface CreateFeatureFlagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string) => Promise<void>;
}

const CreateFeatureFlagModal: React.FC<CreateFeatureFlagModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onCreate(name, description);
      setName('');
      setDescription('');
      toast.success('Feature flag created!');
      onClose();
    } catch (error) {
      toast.error('Failed to create feature flag. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const isFormValid = name.trim() !== '' && description.trim() !== '';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4">Create a Feature Flag</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="description">
              Description: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              aria-required="true"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-400 hover:shadow-lg"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-primary text-white px-4 py-2 rounded flex items-center justify-center ${!isFormValid || loading ? 'opacity-50 cursor-not-allowed' : ''} hover:bg-primary-dark hover:shadow-lg`}
              aria-label="Create feature flag"
              disabled={!isFormValid || loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <Spinner className="mr-2" color="white" />
                </span>
              ) : (
                'Create'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeatureFlagModal; 