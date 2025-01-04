import React, { useEffect, useRef } from 'react';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose, onSignOut }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10"
      style={{ 
        border: '1px solid #e5e7eb',
        transform: 'translateY(0)',
      }}
    >
      <div className="py-1">
        <button
          onClick={onSignOut}
          className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 transition-colors duration-150"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dropdown;