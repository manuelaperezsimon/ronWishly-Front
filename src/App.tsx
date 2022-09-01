import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RegisterForm from "./components/Register/RegisterForm";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
