import { ThemeProvider } from "styled-components";
import Register from "./components/Register/Register";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Register />
    </ThemeProvider>
  );
}

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
export default App;
