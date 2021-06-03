import React from 'react';
import styled from "styled-components";

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless delivery</p>
            </ItemText>

            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>

                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  
`

const ButtonGroup = styled.div`

  
`

const RightButton = styled.div`

  
`

const LeftButton = styled.div`
  
`