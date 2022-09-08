import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import PageNotFound from "../../components/NotFound/PageNotFound";
import LinkStyledPageNotFound from "./PageNotFoundPageStyled";

const PageNotFoundPage = (): JSX.Element => {
  return (
    <>
      <PageNotFound />
      <LinkStyledPageNotFound className="not-found-text">
        <Link to={"/wishes"}>
          <ButtonStyled className="button-link">Go to wishes!</ButtonStyled>
        </Link>
      </LinkStyledPageNotFound>
    </>
  );
};
export default PageNotFoundPage;
