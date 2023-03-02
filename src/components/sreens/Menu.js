import React, { useState } from "react";
import styled from "styled-components";
import dishes from "../JSON/dishes.json";

function Menu({
  addToCart,
  removeFromCart,
  qty1,
  qty2,
  qty3,
  qty4,
  qty5,
  qty6,
  qty7,
  qty8,
}) {


  // Dishes Rendering Function
  let renderDishes = () => {
    return dishes.map((dish) => {
      return (
        <Dish style={{ background: `var(--card-5)` }} key={dish.id}>
          <Top>
            <Span>Orders</Span>{" "}
            <ArrowDiv>
              <Arrow src={require("../assets/images/arrow.svg").default} />{" "}
            </ArrowDiv>
            <Span>Kitchen</Span>
          </Top>
          <DishDetail>
            <Name>{dish.title}</Name>
            <Price>${dish.price}</Price>
          </DishDetail>
          <AddDish>
            <Minus
              onClick={() => {
                removeFromCart(dish.id);
              }}
            >
              <MinusImage
                src={require("../assets/images/minus.svg").default}
                alt="Minus"
              />
            </Minus>
            <DishAdded>{eval(`qty${dish.id}`)}</DishAdded>
            <Plus
              onClick={() => {
                addToCart(dish.id);
              }}
            >
              <PlusImage
                src={require("../assets/images/plus.svg").default}
                alt="Plus"
              />
            </Plus>
          </AddDish>
        </Dish>
      );
    });
  };

  return (
    <MenuContainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>
            <Search>
              <SearchIcon
                src={require("../assets/images/search.svg").default}
              />
              <SearchInput placeholder="Search" />
            </Search>
          </Head>
          <Category>
            <Item style={{ background: "var(--card-1)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-1.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Break fast</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-2)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-2.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Soups</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-3)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-3.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Pasta</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-4)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-4.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Sushi</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-5)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-5.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Main course</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-6)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-6.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Desserts</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-7)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-7.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Drinks</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-8)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-8.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Alcohol</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
          </Category>

          <Line />

          <Dishes>{renderDishes()}</Dishes>

          <Bottom>
            <ProcessingOrders>
              <Order>
                <Code>T4</Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                </OrderDetail>
                <Process style={{ display: "none" }}>In process</Process>
              </Order>
              <Order>
                <Code
                  style={{
                    background: "#525151",
                    color: "#fff",
                  }}
                >
                  T2
                </Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                </OrderDetail>
                <Process>In process</Process>
              </Order>
              <Order>
                <Code style={{ background: "#2d2d2d", color: "#fff" }}>T4</Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                </OrderDetail>
                <Process>In process</Process>
              </Order>
            </ProcessingOrders>
          </Bottom>
        </Container>
      </Wrapper>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.section`
  width: 62%;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Head = styled.div`
  height: 70px;
  display: flex;
`;
const Search = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  background: #2d2d2d;
  opacity: 0.7;
  margin: 14px 0px;
  border-radius: 5px;
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 20px;
`;
const SearchInput = styled.input`
  color: #fff;
  &::placeholder {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Category = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Item = styled.li`
  width: 24%;
  height: 140px;
  margin: 5px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ImageContainer = styled.div`
  margin-left: 10px;
`;
const CategoryImage = styled.img``;
const Content = styled.div`
  margin-left: 10px;
`;
const Title = styled.h4`
  color: #000;
  font-weight: 600;
`;
const Number = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;

const Line = styled.hr`
  border-bottom: 1.5px solid #2d2d2d;
  margin: 5px 0px;
`;

const Dishes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Dish = styled.li`
  width: 24%;
  height: 140px;
  margin: 5px 0px;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    background-color: #2d2d2d;
    width: 95%;
    margin-left: 5%;
    height: 100%;
    opacity: 1;
    z-index: 1;
  }
  &:hover::before {
    opacity: 1;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  padding-top: 5px;
  color: #8e8e8e;
  position: relative;
  z-index: 100;
`;
const ArrowDiv = styled.span`
  width: 20px;
  display: inline-block;
`;
const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;
const Span = styled.span``;
const DishDetail = styled.div`
  font-size: 15px;
  margin: 10px;
  position: relative;
  z-index: 100;
  padding-left: 5px;
`;
const Name = styled.h4``;
const Price = styled.span`
  color: #8e8e8e;
`;
const AddDish = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 15px;
  position: relative;
  z-index: 100;
`;
const Minus = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
  cursor: pointer;
`;
const MinusImage = styled.img`
  width: 100%;
  height: 100%;
`;
const DishAdded = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Plus = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
  cursor: pointer;
`;
const PlusImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
  margin-top: 20px;
`;
const ProcessingOrders = styled.ul`
  display: flex;
  align-items: center;
  border-top: 1px solid #8e8e8e;
`;
const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  border-right: 1px solid #8e8e8e;
  padding: 8px 5px;
  &:first-child {
    width: 30%;
  }
  &:last-child {
    border: none;
  }
`;
const Code = styled.div`
  background: var(--card-4);
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;
`;
const OrderDetail = styled.div`
  height: 100%;
`;
const Customer = styled.h4`
  font-size: 14px;
`;
const Kitchen = styled.blockquote`
  font-size: 12px;
`;
const ArrowIcon = styled.img`
  width: 12px;
`;

const Process = styled.div`
  font-size: 7px;
  background: #84c27d;
  border-radius: 6px;
  padding: 2px 6px;
  margin-bottom: 20px;
  color: #000;
`;
