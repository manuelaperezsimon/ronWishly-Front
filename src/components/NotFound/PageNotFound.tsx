import PageNotFoundStyled from "./PageNotFoundStyled";

const PageNotFound = (): JSX.Element => {
  return (
    <PageNotFoundStyled>
      <div className="circles__container">
        <img
          className="logo__picture"
          src="/img/circles-red.png"
          alt="two circles red"
        />
      </div>
      <div className="not-found-warning__text__container">
        <p className="not-found-warning__text__title">404: PAGE NOT FOUND</p>
      </div>
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
