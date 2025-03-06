import React from 'react';

const PortfolioTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? 'text-white border-purple-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyle} relative z-10 rounded-full border-2 px-6 py-3 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default PortfolioTag;
