import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginFormPage from "../../pages/LoginPage/LoginFormPage";
import PageNotFoundPage from "../../pages/PageNotFoundPage/PageNotFoundPage";
import RegisterFormPage from "../../pages/RegisterPage/RegisterFormPage";
import WishesListPage from "../../pages/WishesListPage/WishesListPage";
import { loginUsersActionCreator } from "../../store/features/users/slices/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import styledMainTheme from "../../styledMainTheme";
import decodeToken from "../../utils/decodeToken";
import WishDetailsPage from "../../pages/WishDetailPage/WishDetailPage";
import WishFormCreatePage from "../../pages/WishFormCreatePage/WishFormCreatePage";
import WishFormModifyPage from "../../pages/WishFormModifyPage/WishFormModifyPage";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const localUser = decodeToken(token);
      dispatch(loginUsersActionCreator(localUser));
      navigate(pathname);
    } else {
      navigate(pathname);
    }
  }, [dispatch, navigate, pathname]);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route
          path="/wishes"
          element={
            <>
              <WishesListPage />
            </>
          }
        />
        <Route
          path="/modify/:id"
          element={
            <>
              <WishFormModifyPage />
            </>
          }
        />
        <Route path="/wishes/details/:id" element={<WishDetailsPage />} />
        <Route path="/*" element={<PageNotFoundPage />} />
        <Route path="/create" element={<WishFormCreatePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
