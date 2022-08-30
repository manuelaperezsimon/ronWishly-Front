import { ThemeProvider } from "styled-components";
import Register from "./components/Register/Register";
import styledMainTheme from "./styledMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <div className="container-app">
        <Register />
      </div>
    </ThemeProvider>
  );
}

export default App;
