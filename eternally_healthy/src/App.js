import styles from "./App.module.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Favor from "./components/Favor";
import Buys from "./components/Buys";
import OrdersForm from "./components/Cart/OrdersForm";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const AppContext = React.createContext({});

function App() {
    let [isOpenCart, setIsOpenCart] = useState(false);
    let [itemsCart, setItemsCart] = useState([]);
    let [items, setItems] = useState([]);
    let [favor, setFavor] = useState([]);
    let [sum, setSum] = useState(0);
    let [buysGoods, setBuysGoods] = useState([]);
    let [onFramed, setOnFramed] = useState(false);
    let [isLoading, setIsLoading] = useState(true);
    let [inputValue, setInputValue] = useState("");
    let openCart = () => {
        setIsOpenCart(!isOpenCart);
    };
    const dataPullOut = (obj) => {
        if (itemsCart.find((item) => item.id === obj.id)) {
            setItemsCart((prev) => prev.filter((item) => item.id != obj.id));
        } else axios.post("http://localhost:3001/cart", obj);
        setItemsCart((prev) => [...prev, obj]);
    };
    let dataFarPullOt = (obj) => {
        if (itemsCart.find((item) => item.id === obj.id)) {
            setItemsCart((prev) => prev.filter((item) => item.id != obj.id));
        } else axios.post("http://localhost:3001/cart", obj);
        setItemsCart((prev) => [...prev, obj]);
    };
    let onAddFavorite = (obj) => {
        axios.post("http://localhost:3001/favorites", obj);
        setFavor((prev) => [...prev, obj]);
    };
    let onAddBuys = (obj) => {
        axios.post("http://localhost:3001/buys", obj);
    };
    useEffect(() => {
        // fetch("https://63d8e9bd74f386d4efe06c87.mockapi.io/items")
        // .then((res) => {
        //     return res.json();
        // })
        // .then((json) =>{
        // setItems(json)
        // })
        async function fetchData() {
            const itemResponce  = await axios.get("http://localhost:3001/items");
            const cartResponce  = await axios.get("http://localhost:3001/cart");
            const favorResponce = await axios.get("http://localhost:3001/favorites");
            const buysResponce  = await axios.get("http://localhost:3001/buys");
            setIsLoading(false);
            setItems(itemResponce.data);
            setItemsCart(cartResponce.data);
            setFavor(favorResponce.data);
            setBuysGoods(buysResponce.data);
        }
        fetchData();
    }, []);
    let removeItem = (id) => {
        axios.delete(`http://localhost:3001/cart/${id}`);
        setItemsCart((prev) => prev.filter((item) => item.id != id));
    };
    let deleteFav = (id) => {
        axios.delete(`http:localhost:3001/favorites/${id}`);
        setFavor((prev) => prev.filter((item) => item.id != id));
    };

    let addFramedGoods = (obj) => {
        // axios.delete(`https://63d8e9bd74f386d4efe06c87.mockapi.io/buys/${id}`);
        setBuysGoods(itemsCart);
        setOnFramed(!onFramed);
        // 
    };
    let changeInputCount = (event) => {
        setInputValue(event.target.value);
    };

    let countSum = () => {
        for (let i = 0; i < itemsCart.length; i++) {
            sum += +itemsCart[i].price * itemsCart[i].count;
        }
    };
    countSum();

    const slides= [
        {src:"/images/slide.jpg"  ,   title:"i1"},
        {src:"/images/slide3.jpg" ,   title:"i3"},
        {src:"/images/slider4.jpg" ,   title:"i4"},
        {src:"/images/slide2.jpg"  ,   title:"i2"},
        {src:"/images/slide6.webp" ,   title:"i5"},
    ];
    // "https://sport.bio-shop.kiev.ua/image/cache/catalog/slider_4-850x300-850x300.jpg" 
    // "https://sport.bio-shop.kiev.ua/image/cache/catalog/slider_3-850x300-850x300.jpg"

    return (
        <AppContext.Provider value={{ items, favor, sum, buysGoods }}>
            <div className={styles.wrapper}>
                <Router>
                    {isOpenCart ? (
                        <Cart
                            sum={sum}
                            removeItem={removeItem}
                            setItemsCart={setItemsCart}
                            itemsCart={itemsCart}
                            openCart={openCart}
                            addFramedGoods={addFramedGoods}
                            onFramed={onFramed}
                        />
                    ) : undefined}
                    <Header sum={sum} openCart={openCart} state={isOpenCart} />
                    <Routes>
                        <Route
                            exact
                            path="/favorites"
                            element={
                                <Favor
                                    changeInputCount={changeInputCount}
                                    favor={favor}
                                    deleteFav={deleteFav}
                                    pullOutDataFar={(obj) => dataFarPullOt(obj)}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/buys"
                            element={
                                <Buys
                                    buysGoods={buysGoods}
                                    addFramedGoods={addFramedGoods}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/"
                            element={
                                <Main
                                    slides={slides}
                                    isLoading={isLoading}
                                    items={items}
                                    setItems={setItems}
                                    itemsCart={itemsCart}
                                    setItemsCart={setItemsCart}
                                    pullOutData={(obj) => dataPullOut(obj)}
                                    pullOutFavor={(obj) => onAddFavorite(obj)}
                                />
                            }
                        />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </AppContext.Provider>
    );
}
export default App;
