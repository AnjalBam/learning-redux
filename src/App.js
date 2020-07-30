import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import BreadContainer from "./components/BreadContainer";
import HooksBreadContainer from "./components/HooksBreadContainer";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer/>
                <HooksCakeContainer/>
                <IceCreamContainer/>
                <HooksIceCreamContainer/>
                <BreadContainer/>
                <HooksBreadContainer/>
            </div>
        </Provider>
    );
}

export default App;
