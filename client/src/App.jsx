import React from 'react'
import AppRoutes from "./routes/AppRoutes.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ProjectProvider } from './context/ProjectContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ProjectProvider>
                    <AppRoutes/>    
                </ProjectProvider>
            </ThemeProvider>
        </AuthProvider>
    )
}
export default App
