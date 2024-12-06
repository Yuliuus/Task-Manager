import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
