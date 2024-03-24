import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
        <Provider store={store}>
            <App />
        </Provider>
);
