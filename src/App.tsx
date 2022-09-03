import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LoginFormPage from "./pages/LoginPage/LoginFormPage";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";
import RegisterFormPage from "./pages/RegisterPage/RegisterFormPage";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
