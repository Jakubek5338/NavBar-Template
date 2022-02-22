/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';
import MenuContext from '../../../context/MenuContext';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavLink from '../../atoms/NavLink/NavLink';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import MobileMenu from '../../molecules/MobileMenu/MobileMenu';

gsap.registerPlugin(ScrollTrigger);

type LogoProps = {
  isDown: boolean;
};

const StyledNavBar = styled.div<LogoProps>`
  @media (min-width: 768px) {
    height: 8vw;
    padding: 0;
  }
  @media (min-width: 1280px) {
    height: 5vw;
    padding: 0vw 10vw 0vw 10vw;
  }
  display: flex;
  height: 15vw;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ isDown }) => (isDown ? 'white' : 'transparent')};
  transition: background-color 0.5s 0s ease-in-out;
`;

const Logo = styled.div<LogoProps>`
  @media (min-width: 768px) {
    width: 15vw;
  }
  @media (min-width: 1280px) {
    width: 10vw;
  }
  height: 100%;
  display: flex;
  z-index: 10;
  padding-left: 25px;
  justify-content: left;
  align-items: center;
  width: 80vw;
  h1 {
    color: ${({ isDown }) => (isDown ? 'black' : 'white')};
    transition: color 0.1s 0.1s ease-in-out;
    font-size: 3rem;
  }
`;

const MobileMenuWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
`;

const HamburgerWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20vw;
`;

const NavigationWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 85vw;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1280px) {
    width: 70vw;
  }
  display: none;
  height: 100%;
  padding-left: 40%;
  font-size: 2rem;
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  function setMenuOpen() {
    isOpen && isActive ? setIsDown(true) : setIsDown(false);
    !isDown ? setIsActive(false) : setIsActive(true);
    setIsOpen((prevState) => !prevState);
  }
  const navigation = useRef<any | null>(null);
  const tlNavigation = useRef<any | null>(null);

  useEffect(() => {
    tlNavigation.current = gsap.timeline({
      scrollTrigger: {
        trigger: navigation.current,
        start: '100% top',
        onLeave: () => setIsDown(true),
        onEnterBack: () => setIsDown(false),
      },
    });
  }, []);
  return (
    <>
      <MenuContext.Provider value={{ isOpen, setMenuOpen, isDown }}>
        <StyledNavBar ref={navigation} isDown={isDown}>
          <Logo isDown={isDown}>
            <h1>Logo</h1>
          </Logo>
          <NavigationWrapper>
            <NavLink isDown={isDown} to="/notes">
              Nav1
            </NavLink>
            <NavLink isDown={isDown} to="/">
              Nav2
            </NavLink>
            <NavLink isDown={isDown} to="/">
              Nav3
            </NavLink>
            <NavLink isDown={isDown} to="/">
              Nav4
            </NavLink>
            <NavLink isDown={isDown} to="/">
              Nav5
            </NavLink>
          </NavigationWrapper>
          <HamburgerWrapper>
            <HamburgerButton />
          </HamburgerWrapper>
          <MobileMenuWrapper>
            <MobileMenu />
          </MobileMenuWrapper>
        </StyledNavBar>
      </MenuContext.Provider>
    </>
  );
}

export default NavBar;
