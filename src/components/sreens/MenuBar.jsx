import "../../App.css";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <MenuContainer>
      <Wrapper className="wrapper">
        <FlexContainer>
          <TopSection>
            {/* <Link to="/"> */}
              <Logo>
                <LogoAnchor>
                  <LogoImage
                    src={require("../assets/images/logo.png")}
                    alt="Cosypos Logo"
                  />
                </LogoAnchor>
              </Logo>
            {/* </Link> */}
            <MenuListContainer>
              <MenuList>
                {/* <Link to="/Reservation"> */}
                  <ListAnchor> Reservation</ListAnchor>
                {/* </Link> */}
              </MenuList>
              <MenuList>
                {/* <Link to="/TableServices"> */}
                  <ListAnchor> Table Services</ListAnchor>
                {/* </Link> */}
              </MenuList>
              <MenuList>
                {/* <Link to="/Menu"> */}
                  <ListAnchor> Menu</ListAnchor>
                {/* </Link> */}
              </MenuList>
              <MenuList>
                {/* <Link to="/Delivery"> */}
                  <ListAnchor> Delivery</ListAnchor>
                {/* </Link> */}
              </MenuList>
              <MenuList>
                {/* <Link to="/Accounting"> */}
                  <ListAnchor> Accounting</ListAnchor>
                {/* </Link> */}
              </MenuList>
            </MenuListContainer>
          </TopSection>
          <BottomSection>
            <UserList>
              <User>
                <Letter>L</Letter>
                <Name>Lesliya k</Name>
              </User>
              <User>
                <Letter
                  style={{
                    background: "var(--card-8)",
                  }}
                >
                  C
                </Letter>
                <Name>Camaron W.</Name>
              </User>
              <User>
                <Letter
                  style={{
                    background: "var(--card-7)",
                  }}
                >
                  J
                </Letter>
                <Name>Jacob j.</Name>
              </User>
            </UserList>
            <Year>
              <YearLetter>C</YearLetter>
              <AppYear>2022 CosyPOS App</AppYear>
            </Year>
          </BottomSection>
        </FlexContainer>
      </Wrapper>
    </MenuContainer>
  );
}

export default MenuBar;

const MenuContainer = styled.aside`
  width: 18%;
  background: #000;
`;
const Wrapper = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 750px;
`;
const TopSection = styled.div``;
const Logo = styled.h1`
  width: 70%;
  margin: 0 auto;
  padding-top: 15px;
  cursor: pointer;
`;
const LogoAnchor = styled.a`
  display: inline-block;
`;
const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuListContainer = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  align-items: center;
`;
const MenuList = styled.li`
  width: 82%;
  color: #a6a6a6;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 6px;
    height: 40px;
    width: 170px;
    border-radius: 8px;
    background: #2d2d2d;
    opacity: 0;
    z-index: -1;
    cursor: pointer;
  }
  :hover {
    color: #fff;
  }
  :hover::before {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }
`;
const ListAnchor = styled.span`
  color: #a6a6a6;
  font-size: 15px;
  margin-left: 20px;
  padding: 5px;
`;

const BottomSection = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;
const UserList = styled.ul`
  height: 50%;
  margin: auto 0;
`;
const User = styled.li`
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 6px;
  border: 1px solid #a6a6a6;
  width: fit-content;
  cursor: pointer;
  &:hover {
    background: #8e8e8e4a;
  }
`;
const Letter = styled.span`
  padding: 5px 12px;
  border-radius: 50%;
  background: var(--card-2);
  color: #000;
  font-weight: 500;
  margin-right: 12px;
`;
const Name = styled.span`
  font-size: 14px;
`;

const Year = styled.div``;
const YearLetter = styled.span`
  font-size: 10px;
  font-weight: 800;
  background: #c6b1e1;
  color: #000;
  border-radius: 25px;
  padding: 3px 8px;
`;
const AppYear = styled.span`
  margin-left: 10px;
  color: #a6a6a6;
  font-size: 12px;
`;
