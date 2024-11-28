import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';
import { formatTimestamp } from '../utils/format-timestamp';
import { FeatureFlag } from '../services/api';

interface FeatureFlagCardProps {
  flag: FeatureFlag;
  onCardClick: (id: string) => void;
}

const FeatureFlagCard: React.FC<FeatureFlagCardProps> = ({
  flag,
  onCardClick,
}) => {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={() => onCardClick(flag.id)}
      data-testid={`feature-flag-${flag.id}`}
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="hover:text-primary-600 text-xl font-bold text-gray-800 transition-colors">
            {flag.name}
          </h2>
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-600">
              Status:
            </span>
            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                flag.status === 'ENABLED'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {flag.status}
            </span>
          </div>
        </div>
        <p className="mb-6 line-clamp-2 text-gray-600">{flag.description}</p>
        <div className="mt-auto border-t pt-4">
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center">
              <FaRegCalendarAlt className="mr-2 h-4 w-4" />
              <span>Created: {formatTimestamp(flag.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <MdUpdate className="mr-2 h-4 w-4" />
              <span>Updated: {formatTimestamp(flag.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlagCard;
