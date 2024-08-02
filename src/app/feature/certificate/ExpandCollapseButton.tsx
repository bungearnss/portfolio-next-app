import React from 'react';

interface ExpandCollapseButtonProps {
  onClick: () => void;
  expanded: boolean;
}

const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({ onClick, expanded }) => {
  return (
    <div className="flex items-center justify-center w-10/12 md:py-5 pb-5">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-300 text-xs md:text-sm cursor-pointer" onClick={onClick}>
        {expanded ? 'Collapse' : 'Expand More'}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default ExpandCollapseButton;