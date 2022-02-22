import React from 'react';

interface IMenuContext {
  isOpen: boolean;
  isDown: boolean;
  setMenuOpen?: () => void;
}

const defaultMenuState = {
  isOpen: false,
  isDown: false,
};

const MenuContext = React.createContext<IMenuContext>(defaultMenuState);

export default MenuContext;
