import "./App.css";
import styled from "styled-components";
import Menu from "./components/sreens/Menu"
import MenuBar from "./components/sreens/MenuBar";
import Cart from "./components/sreens/Cart";
import React, { useState } from "react";
import dishes from "../src/components/JSON/dishes.json";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/sreens/PageNotFound";

function App() {
  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  const [qty4, setQty4] = useState(0);
  const [qty5, setQty5] = useState(0);
  const [qty6, setQty6] = useState(0);
  const [qty7, setQty7] = useState(0);
  const [qty8, setQty8] = useState(0);
  // add to cart function
  const addToCart = (id) => {
    let isCart = false;

    let item = dishes.find((dish) => dish.id === id);
    if (cartItems.length > 0) {
      isCart = cartItems.find((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.qty += 1;
          cartItem.price += item.price;
          setCartItem([...cartItems]);
          setTotal(total + item.price);
          eval(`setQty${item.id}(qty${item.id} + 1)`);
          console.log(eval(`qty${item.id}`));
          return true;
        }
        return false;
      });
    } else {
      let newItem = {
        id: item.id,
        number: cartItems.length + 1,
        title: item.title,
        price: item.price,
        qty: 1,
      };

      setTotal(total + item.price);
      setCartItem([...cartItems, newItem]);
      eval(`setQty${item.id}(qty${item.id} + 1)`);
      console.log(eval(`qty${item.id}`));
    }

    cartItems.map(() => {
      if (Boolean(isCart) === false) {
        let newItem = {
          id: item.id,
          number: cartItems.length + 1,
          title: item.title,
          price: item.price,
          qty: 1,
        };

        setCartItem([...cartItems, newItem]);
        setTotal(total + item.price);
        console.log("i have entered map");
        eval(`setQty${item.id}(qty${item.id} + 1)`);
        console.log(eval(`qty${item.id}`));
      }
      return null;
    });
  };

  // Removing function
  let removeFromCart = (id) => {
    let item = dishes.find((dish) => dish.id === id);
    cartItems.find((cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.qty === 1) {
          let newArr = cartItems.filter((i) => {
            return i.id !== cartItem.id;
          });
          console.log(newArr);
          setCartItem(newArr);
          eval(`setQty${item.id}(0)`);
          setTotal(total - item.price);
        } else {
          cartItem.qty -= 1;
          cartItem.price -= item.price;
          setCartItem([...cartItems]);
          setTotal(total - item.price);
          eval(`setQty${item.id}(qty${item.id} - 1)`);
          console.log(eval(`qty${item.id}`));
        }
      }
      return null;
    });
  };

  return (
    <>
      <Helmet>
        <title>CosyPOS</title>
      </Helmet>
      <Spotlight>
        <Router>
          <Routes>
            <Route
              path={"/"}
              element={[
                <MenuBar />,
                <Menu
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  qty1={qty1}
                  qty2={qty2}
                  qty3={qty3}
                  qty4={qty4}
                  qty5={qty5}
                  qty6={qty6}
                  qty7={qty7}
                  qty8={qty8}
                />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route
              path={"/Menu"}
              element={[
                <MenuBar />,
                <Menu
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  qty1={qty1}
                  qty2={qty2}
                  qty3={qty3}
                  qty4={qty4}
                  qty5={qty5}
                  qty6={qty6}
                  qty7={qty7}
                  qty8={qty8}
                />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route
              path={"/Accounting"}
              element={[
                <MenuBar />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route
              path={"/Delivery"}
              element={[
                <MenuBar />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route
              path={"/Reservation"}
              element={[
                <MenuBar />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route
              path={"/TableServices"}
              element={[
                <MenuBar />,
                <Cart cartItems={cartItems} total={total} />,
              ]}
            />
            <Route path={"*"} element={<PageNotFound/>}/>
          </Routes>
        </Router>
      </Spotlight>
    </>
  );
}

export default App;
const Spotlight = styled.section`
  display: flex;
  width: 100%;
`;
