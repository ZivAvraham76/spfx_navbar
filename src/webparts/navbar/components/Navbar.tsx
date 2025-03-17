import * as React from 'react';
import type { INavbarProps } from './INavbarProps';
import '../../../../assets/dist/tailwind.css';
import LeftNav from './LeftNav';
import Search from './Search';
import Services from './Services';
import MyLearning from './MyLearning';

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <div className="flex items-center justify-between w-full px-8 py-3 bg-white gap-4">
        <LeftNav />
      <Search />
        <Services />
        <MyLearning />
      </div>
  );
};

export default Navbar;
