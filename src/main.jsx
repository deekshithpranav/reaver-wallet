import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Wallet from "./components/Wallet.jsx";
import store from "./app/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
