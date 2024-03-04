import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductDataProvider from "./Context/ProductDataProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductDataProvider>
    <BrowserRouter>
      <ChakraProvider>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ChakraProvider>
    </BrowserRouter>
  </ProductDataProvider>
);
