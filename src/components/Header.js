import React, {useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/carSlice";
import {useSelector} from "react-redux";

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState( false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt=""/>
            </a>



            <Menu>
                {cars && cars.map((car, index) => (
                    <a href="#" key={index}>{car}</a>

                ))}

            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                {cars.map((car, index) => (
                    <li><a href="#" key={index}>{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Power</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Support</a></li>
            </BurgerNav>
        </Container>
    );
};

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  
  @media(max-width:768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: no-wrap;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  // this shows the bar
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`