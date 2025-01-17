import { createRoot } from 'react-dom/client'
import Home from "./pages/Home/Home.tsx";
import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Home/>
    </StrictMode>
)
