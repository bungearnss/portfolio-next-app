import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="w-full h-full p-4 m-4 rounded-md bg-gray-200 animate-pulse">
      <div className="flex space-x-4">
        <div className="flex-1 py-1">
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-full h-4 mt-2 bg-gray-300 rounded"></div>
          <div className="w-5/6 h-4 mt-2 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;