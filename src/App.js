import React from "react";
import AppContainer from "./components/layout/AppContainer";
import SideBar from "./components/layout/SideBar";
import { Layout } from "./style";

function App() {
    return (
        <Layout>
            <SideBar />
            <AppContainer />
        </Layout>
    );
}

export default App;
