import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { MdHomeFilled, MdLogout, MdFavoriteBorder } from 'react-icons/md';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { BsPlusSquare } from 'react-icons/bs';
import { ImCompass2 } from 'react-icons/im';
import { logOutUser } from '../helper/storeUser';

const NavBar = () => {
  const logOut = () => {
    logOutUser();
    location.reload();
  };
  return (
    <>
      <Nav>
        <InnerWrapper>
          <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
          <SearchBar placeholder="검색" />
          <Icons>
            <MdHomeFilled size="29" />
            <TiLocationArrowOutline size="35" />
            <BsPlusSquare size="25" />
            <ImCompass2 size="25" />
            <MdFavoriteBorder size="28" />
            <Button onClick={logOut}>
              <MdLogout size="25" className="logout" />
            </Button>
          </Icons>
        </InnerWrapper>
      </Nav>
      <Outlet />
    </>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid rgba(131, 129, 129, 0.2);
`;

const InnerWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Logo = styled.img`
  position: relative;
  height: 30px;
  top: 3px;
`;

const SearchBar = styled.input`
  position: absolute;
  top: 13px;
  left: calc(50% - 190px);
  width: 280px;
  height: 35px;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 4px;
  font-size: 15px;
  padding: 10px;

  @media (max-width: 690px) {
    display: none;
  }
`;

const Icons = styled.div`
  width: 250px;
  min-width: 250px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: white;
`;
export default NavBar;
