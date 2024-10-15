import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Routing from "./layout/Routing";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <Layout>
              <Routing />
            </Layout>
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;
