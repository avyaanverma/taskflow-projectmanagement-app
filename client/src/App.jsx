import React from 'react'
import AppRoutes from "./routes/AppRoutes.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
    return (
        <ThemeProvider>
            <AppRoutes/>
        </ThemeProvider>
    )
}
export default App
