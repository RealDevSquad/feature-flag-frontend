import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div
      className="flex h-full items-center justify-center"
      data-testid="spinner"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
};

export default Spinner;
