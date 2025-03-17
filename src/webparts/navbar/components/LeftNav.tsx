import * as React from 'react';

const LeftNav: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={require('../../navbar/assets/logo.png')}
        className="w-[30px] h-[30px]"
        alt="Logo"
      />
      <h2 className="text-[#000000] text-sm font-semibold">Training Portal</h2>
    </div>
  );
};

export default LeftNav;
