import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Protector from "../Protector/Protector";
import ProtectorReverse from "../ProtectorReverse/ProtectorReverse";
import LoginFormPage from "../../pages/LoginPage/LoginFormPage";
import PageNotFoundPage from "../../pages/PageNotFoundPage/PageNotFoundPage";
import RegisterFormPage from "../../pages/RegisterPage/RegisterFormPage";
import WishesListPage from "../../pages/WishesListPage/WishesListPage";
import { loginUsersActionCreator } from "../../store/features/users/slices/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import styledMainTheme from "../../styledMainTheme";
import decodeToken from "../../utils/decodeToken";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const localUser = decodeToken(token);
      dispatch(loginUsersActionCreator(localUser));
    }
    navigate(pathname);
  }, [dispatch, navigate, pathname]);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route
          path="/login"
          element={
            <ProtectorReverse>
              <LoginFormPage />
            </ProtectorReverse>
          }
        />
        <Route
          path="/wishes"
          element={
            <Protector>
              <WishesListPage />
            </Protector>
          }
        />
        <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
