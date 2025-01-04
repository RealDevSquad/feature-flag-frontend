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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
      role="menu"
      aria-label="User menu"
      style={{
        border: '1px solid #e5e7eb',
        transform: 'translateY(0)',
      }}
    >
      <div className="py-1">
        <button
          onClick={onSignOut}
          className="block w-full px-4 py-2 text-left text-sm font-bold text-blue-600 transition-colors duration-150 hover:bg-gray-100"
          role="menuitem"
          aria-label="Sign out"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
