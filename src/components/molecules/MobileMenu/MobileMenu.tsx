import React from 'react';
import styled from 'styled-components';
import NavLink from '../../atoms/NavLink/NavLink';
import MenuContext from '../../../context/MenuContext';

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenuWrapper = styled.div<MobileMenuProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: #1f2028;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 20vh 0 20vh 0;
  transition: transform 0.1s ease-in-out;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '+100%')});
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

function MobileMenu() {
  return (
    <MenuContext.Consumer>
      {({ setMenuOpen, isOpen }) => (
        <>
          <MobileMenuWrapper isOpen={isOpen}>
            <NavLink isDown={false} to="/notes" onClick={setMenuOpen}>
              Nav1
            </NavLink>
            <NavLink isDown={false} to="/" onClick={setMenuOpen}>
              Nav2
            </NavLink>
            <NavLink isDown={false} to="/" onClick={setMenuOpen}>
              Oferta
            </NavLink>
            <NavLink isDown={false} to="/" onClick={setMenuOpen}>
              Realizacje
            </NavLink>
            <NavLink isDown={false} to="/" onClick={setMenuOpen}>
              Kontakt
            </NavLink>
          </MobileMenuWrapper>
        </>
      )}
    </MenuContext.Consumer>
  );
}

export default MobileMenu;
