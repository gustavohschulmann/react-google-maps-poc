import React from "react";
import AppContainer from "./components/layout/AppContainer";
import SideBar from "./components/layout/SideBar";
import { Layout } from "./style";

import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <SideBar />
                <AppContainer />
            </Layout>
        </Provider>
    );
}

export default App;
