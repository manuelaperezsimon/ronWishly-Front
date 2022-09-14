import { IdWish } from "../../store/interfaces/wishesInterfaces";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import WishDetailStyled from "./WishDetailStyled";
import useApi from "../../hooks/useApi/useApi";
import { useNavigate } from "react-router-dom";

interface WishDetailProps {
  wish: IdWish;
}

const WishDetail = ({ wish }: WishDetailProps): JSX.Element => {
  let isDisable = false;

  const { deleteWish } = useApi();

  const wishDelete = () => {
    deleteWish(wish.id);
    navigate("/wishes");
  };

  const navigateTowishToModify = async () => {
    navigate(`/modify/${wish.id}`);
  };

  const navigate = useNavigate();

  const navigateToWishList = () => {
    navigate("/wishes");
  };

  const objectLimitDate = new Date(wish.limitDate);

  const limitDate = `${objectLimitDate.getDate()}/${
    objectLimitDate.getMonth() + 1
  }/${objectLimitDate.getFullYear()}`;

  return (
    <>
      <WishDetailStyled>
        <section className="header-container">
          <h1>
            <img
              src="/img/circles.png"
              alt="two circles yellow"
              className="circles__picture circles__picture--big"
              width={"80px"}
            />
          </h1>
          <IoIosClose
            className="icon--close"
            data-testid="icon-close"
            onClick={navigateToWishList}
          />
        </section>

        <section className="wish-detail__section">
          <div className="wish-detail-container__image">
            <img
              className="wish-detail__image"
              src={wish.imageBackUp}
              alt={wish.title}
              width="250"
              height="230"
            />
          </div>
          <div className="wish-detail__container">
            <h3 className="wish-detail__title">{wish.title}</h3>
            <span className="wish-detail__limit-date">
              <>Limit date: {limitDate}</>
            </span>
            <span className="wish-detail__description">
              {wish.description}{" "}
            </span>
          </div>
          <div className="buttons">
            <Button
              buttonText="Modify"
              type="button"
              classNameTypeButton="button--small"
              actionOnclick={navigateTowishToModify}
              isDisable={isDisable}
            />
            <Button
              buttonText="Delete"
              type="button"
              classNameTypeButton="button--small"
              actionOnclick={wishDelete}
              isDisable={isDisable}
            />
          </div>
        </section>
      </WishDetailStyled>
    </>
  );
};

export default WishDetail;
