import styled from "styled-components";


function Cart({ cartItems,total }) {
let tax = total*10/100;
console.log(total);
 
  let renderCartItems = () => {
   
  };

  // Rending the SubTotal function

  return (
    <CartContainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>
            <Heading>
              <Title>Table 5</Title>
              <Name>Leslie k.</Name>
            </Heading>
            <Icon>
              <IconImage src={require("../assets/images/edit.svg").default} />
            </Icon>
          </Head>
          <ItemContainer>
            <ItemList>{renderCartItems()}</ItemList>
          </ItemContainer>

          <TotalContainer>
            <TopSection>
              <SubTotal>
                <SubTitle>Subtotal</SubTitle>
                <SubPrice>$ {total}</SubPrice>
              </SubTotal>
              <Tax>
                <TaxTitle>Tax 10%</TaxTitle>
                <TaxPrice>$ {tax}</TaxPrice>
              </Tax>
              <Line />
              <Total>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>$ {total+tax}</TotalPrice>
              </Total>
            </TopSection>
            <BottomSection>
              <PaymentMethod>
                <PaymentTitle>Payment Method</PaymentTitle>
                <PaymentOption>
                  <Cash>
                    <CashImage
                      src={require("../assets/images/dollar.svg").default}
                    />
                    <CashTitle>Cash</CashTitle>
                  </Cash>
                  <DebitCard>
                    <CardImage
                      src={require("../assets/images/credit.svg").default}
                    ></CardImage>
                    <CardTitle>Debit Card</CardTitle>
                  </DebitCard>
                  <Wallet>
                    <WalletImage
                      src={require("../assets/images/scan.svg").default}
                    ></WalletImage>
                    <WalletTitle>E-wallet</WalletTitle>
                  </Wallet>
                </PaymentOption>
                <PlaceOrdered>Place Order</PlaceOrdered>
              </PaymentMethod>
            </BottomSection>
          </TotalContainer>
        </Container>
      </Wrapper>
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.aside`
  width: 30%;
  padding: 10px 0px;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.div`
  width: 40%;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
`;
const Name = styled.blockquote`
  font-size: 15px;
  color: #a6a6a6;
`;
const Icon = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 13%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled.img`
  width: 60%;
  height: 60%;
`;

const ItemContainer = styled.div`
  margin-top: 15px;
`;
const ItemList = styled.ul``;
const Item = styled.li`
  border-radius: 8px;
  margin-top: 10px;
  background: #2d2d2d;
  padding: 10px 5px 10px 20px;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;
const Number = styled.span`
  display: inline-block;
  width: 8%;
  height: 21px;
  font-size: 13px;
  background: #fff;
  border-radius: 19px;
  color: #000;
  padding: 2px 8px;
`;
const ItemTitle = styled.h4`
  width: 60%;
`;
const Multi = styled.span`
  color: #a6a6a6;
  font-size: 12px;
  font-weight: 500;
`;
const Price = styled.span`
  width: 20%;
`;

const TotalContainer = styled.div`
  border-radius: 8px;
  background: #2d2d2d;
  margin-top: 30px;
  padding: 15px;
`;
const TopSection = styled.div`
  margin-bottom: 60px;
`;
const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
const SubTitle = styled.h4`
  color: #a6a6a6;
`;
const SubPrice = styled.span``;
const Tax = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
`;
const TaxTitle = styled.h4`
  color: #a6a6a6;
`;
const TaxPrice = styled.span``;
const Line = styled.hr`
  border-top: 1px dashed #8e8e8e;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;
const TotalTitle = styled.h4`
  font-weight: 500;
`;
const TotalPrice = styled.span`
  font-weight: 500;
`;

const BottomSection = styled.div``;
const PaymentMethod = styled.div``;
const PaymentTitle = styled.h2`
  font-size: 15px;
  color: #a6a6a6;
  margin-bottom: 10px;
`;
const PaymentOption = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;

const Cash = styled.div`
  width: 30%;
  text-align: center;
`;
const CashImage = styled.img`
  padding: 10px 29px;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);
  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const CashTitle = styled.h2`
  font-size: 13px;
`;
const DebitCard = styled.div`
  width: 30%;
  text-align: center;
`;
const CardImage = styled.img`
  padding: 10px 29px;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);
  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const CardTitle = styled.h2`
  font-size: 13px;
`;
const Wallet = styled.div`
  width: 30%;
  text-align: center;
`;
const WalletImage = styled.img`
  padding: 10px 29px;
  border: 1px solid #000;
  border-radius: 5px;
  filter: invert(1);
  cursor: pointer;
  &:hover {
    filter: invert(0);
    background-color: #fff;
    color: white;
  }
`;
const WalletTitle = styled.h2`
  font-size: 13px;
`;
const PlaceOrdered = styled.button`
  text-align: center;
  background: #fff;
  display: block;
  width: 100%;
  padding: 15px 10px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
`;