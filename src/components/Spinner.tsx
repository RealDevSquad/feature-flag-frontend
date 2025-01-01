import React from 'react';

interface SpinnerProps {
  className?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className, color = 'primary' }) => {
  return (
    <div
      className={`loader ${className}`}
      style={{ width: '24px', height: '24px' }}
    >
      <div
        className={`h-6 w-6 animate-spin rounded-full border-4 border-${color} border-t-transparent`}
      />
    </div>
  );
};

export default Spinner;
