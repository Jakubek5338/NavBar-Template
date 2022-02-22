import React from 'react';
import styled from 'styled-components';
import MenuContext from '../../../context/MenuContext';

type HamburgerProps = {
  isOpen: boolean;
  isDown: boolean;
};

const MenuToggleButton = styled.button<HamburgerProps>`
  width: 40px;
  height: 40px;
  border: 0;
  margin: 0;
  display: inline-block;
  position: relative;
  z-index: 10;
  background-color: transparent;

  span {
    background-color: white;
    background-color: ${({ isDown }) => (isDown ? 'black' : 'white')};
    background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '')};
    transition: background-color 0.1s 0.1s ease-in-out;
    width: 100%;
    height: 3px;
    border-radius: 50px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    &::before,
    &::after {
      content: '';
      background-color: ${({ isDown }) => (isDown ? 'black' : 'white')};
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 50px;
    }
    &::before {
      top: -10px;
      transform: ${({ isOpen }) => (isOpen ? 'translateY(10px) rotate(45deg)' : '')};
      transition: background-color 0.1s 0.1s ease-in-out, transform 0.1s 0.1s ease-in-out;
    }
    &::after {
      top: 10px;
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-10px) rotate(-45deg)' : '')};
      transition: background-color 0.1s 0.1s ease-in-out, transform 0.1s 0.1s ease-in-out;
    }
  }
`;

function MenuButton() {
  return (
    <MenuContext.Consumer>
      {({ setMenuOpen, isOpen, isDown }) => (
        <>
          <MenuToggleButton isOpen={isOpen} isDown={isDown} onClick={setMenuOpen}>
            <span />
          </MenuToggleButton>
        </>
      )}
    </MenuContext.Consumer>
  );
}

export default MenuButton;
