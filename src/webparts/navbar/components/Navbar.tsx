import * as React from 'react';
import type { INavbarProps } from './INavbarProps';
import '../../../../assets/dist/tailwind.css';
import LeftNav from './LeftNav';
import Search from './Search';
import Services from './Services';
import MyLearning from './MyLearning';
import Acronyms from './Acronyms';

const Navbar: React.FC<INavbarProps> = (props) => {

  return (
    <div className="w-full max-w-[1230px] mx-auto flex items-center justify-start h-24 bg-white shadow-custom-shadow px-8 py-3 gap-[24px]">
        <LeftNav />
        <Search />
        <Services />
        <MyLearning />
        <Acronyms />
      
      </div>
  );
};

export default Navbar;
