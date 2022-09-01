import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Register from "./components/Register/Register";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
export default App;
