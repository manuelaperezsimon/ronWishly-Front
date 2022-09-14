import { SyntheticEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import useApi from "../../hooks/useApi/useApi";
import { IdWish } from "../../store/interfaces/wishesInterfaces";
import WishCardStyled from "./WishCardStyled";

interface WishCardProps {
  wish: IdWish;
}

const WishCard = ({
  wish: { title, id, imageBackUp },
}: WishCardProps): JSX.Element => {
  const { deleteWish } = useApi();

  const wishDelete = (event: SyntheticEvent) => {
    event.preventDefault();
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
            src={imageBackUp}
            alt={title}
            width="250"
            height="200"
          />
          <h3 className="wish-card__title">{title}</h3>
        </div>
      </WishCardStyled>
    </>
  );
};

export default WishCard;
