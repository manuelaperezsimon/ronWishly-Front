import { FaRegTrashAlt } from "react-icons/fa";
import useApi from "../../hooks/useApi/useApi";
import { IdWish } from "../../store/interfaces/wishesInterfaces";
import WishCardStyled from "./WishCardStyled";

interface WishCardProps {
  wish: IdWish;
}

const WishCard = ({
  wish: { title, picture, id },
}: WishCardProps): JSX.Element => {
  const { deleteWish } = useApi();

  const wishDelete = () => {
    deleteWish(id);
  };

  return (
    <>
      <WishCardStyled>
        <div className="wish-card__container">
          <div className="icon">
            <FaRegTrashAlt
              className="icon--trash"
              data-testid="icon-trash"
              onClick={wishDelete}
            />
          </div>{" "}
          <img
            className="wish-card__image"
            src={picture}
            alt={title}
            width={"250px"}
          />
          <h3 className="wish-card__title">{title}</h3>
        </div>
      </WishCardStyled>
    </>
  );
};

export default WishCard;
