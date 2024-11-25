import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';
import { formatTimestamp } from '../utils/format-timestamp';

interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  status: 'ENABLED' | 'DISABLED';
  createdAt: number;
  createdBy: string;
  updatedAt: number;
  updatedBy: string;
}

interface FeatureFlagCardProps {
  flag: FeatureFlag;
  onCardClick: (id: string) => void;
}

const FeatureFlagCard: React.FC<FeatureFlagCardProps> = ({ flag, onCardClick }) => {
  return (
    <div 
      onClick={() => onCardClick(flag.id)}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors">
            {flag.name}
          </h2>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600 mr-2">Status:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold 
              ${flag.status === 'ENABLED' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-700'}`}
            >
              {flag.status}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">
          {flag.description}
        </p>
        <div className="border-t pt-4 mt-auto">
          <div className="text-sm text-gray-500 space-y-2">
            <div className="flex items-center">
              <FaRegCalendarAlt className="w-4 h-4 mr-2" />
              <span>Created: {formatTimestamp(flag.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <MdUpdate className="w-4 h-4 mr-2" />
              <span>Updated: {formatTimestamp(flag.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlagCard; 