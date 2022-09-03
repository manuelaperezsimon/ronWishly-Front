import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import LinkStyledPageNotFound from "./PageNotFoundPageStyled";

const PageNotFoundPage = (): JSX.Element => {
  return (
    <>
      <PageNotFound />
      <LinkStyledPageNotFound className="not-found-text">
        <Link to={"/login"}>
          <ButtonStyled className="button-link">Go to Sign In!</ButtonStyled>
        </Link>
      </LinkStyledPageNotFound>
    </>
  );
};
export default PageNotFoundPage;
