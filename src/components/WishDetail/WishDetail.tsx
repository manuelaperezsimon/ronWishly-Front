import { IdWish } from "../../store/interfaces/wishesInterfaces";
import Button from "../Button/Button";

interface WishDetailProps {
  wish: IdWish;
}

const WishDetail = ({ wish }: WishDetailProps): JSX.Element => {
  let isDisable = false;
  return (
    <>
      <div className="wish-detail__image">
        <img
          className="wish-detail__image"
          src={wish.picture}
          alt={wish.title}
          width={"250px"}
        />
      </div>
      <div className="wish-detail__container">
        <h3 className="wish-detail__title">{wish.title}</h3>
        <span className="wish-detail__limit-date">
          Limit date: {wish.limitDate.toDateString()}
        </span>
        <p className="wish-detail__description">{wish.description}</p>
      </div>
      <Button
        buttonText="Modify"
        type="button"
        classNameTypeButton="button--big"
        actionOnclick={() => {}}
        isDisable={isDisable}
      />
      <Button
        buttonText="Delete"
        type="button"
        classNameTypeButton="button--big"
        actionOnclick={() => {}}
        isDisable={isDisable}
      />
    </>
  );
};

export default WishDetail;
