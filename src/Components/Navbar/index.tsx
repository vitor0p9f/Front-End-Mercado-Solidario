import React from 'react';
import { NavigationBar } from './styles';
import { AiOutlineShop, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

export const BottomNavigation: React.FC = () => {
  return (
    <NavigationBar>
      <div className="nav-item">
        <AiOutlineShop size={24} />
      </div>
      <div className="nav-item" >
        <AiOutlineShoppingCart size={24} />
      </div>
      <div className="nav-item" >
        <AiOutlineUser size={24} />
      </div>
    </NavigationBar>
  );
};


