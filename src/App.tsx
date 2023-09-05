import React, {useEffect} from 'react';
import './App.scss';
import {AppDispatch} from "./store";
import {useDispatch} from "react-redux";
import {fetchShopSlice} from "./store/modules/shop/thunks";
import Shop from "./components/menu/shop/shop";
import {Route, Routes} from "react-router-dom";
import Home from "./components/menu/home/home";
import About from "./components/menu/about/about";
import Contacts from "./components/menu/contacts/contacts";
import BasketPage from "./components/settings/basket/basketPage";
import AccountPage from "./components/settings/account/AccountPage";
import LoginPage from "./components/settings/login/LoginPage";
import OpenedCard from "./components/menu/shop/cards/openedCard";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./components/settings/login/RegisterPage";
import ProfilePage from "./components/settings/profile/ProfilePage";


const App: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchShopSlice())
    }, [])

    return (
        <div className="App">

                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>

                        <Route path="shops" element={<Shop/>}/>
                        <Route path="shops/:id" element={<OpenedCard/>}/>

                        <Route path="about" element={<About/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                        <Route path="profile" element={<ProfilePage/>}/>
                        <Route path="basket" element={ <BasketPage/>}/>
                        <Route path="account" element={<AccountPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="*" element={<p>404</p>}/>

                    </Route>
                </Routes>

        </div>
    );
}

export default App;
