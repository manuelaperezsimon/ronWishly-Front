import { BiLogOut } from "react-icons/bi";

import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import WishCard from "../WishCard/WishCard";
import WishesListStyled from "./WishesListStyled";
import Button from "../Button/Button";

const WishesList = (): JSX.Element => {
  const { getAllWishes } = useApi();
  const wishesList = useAppSelector((state: RootState) => state.wishes);
  const isDisabled = false;

  useEffect(() => {
    getAllWishes();
  }, [getAllWishes]);

  return (
    <>
      <WishesListStyled>
        <section className="header__container">
          <img
            src="img/circles.png"
            alt="two circles yellow"
            className="circles__picture"
          />
          <div className="icon__logout">
            <BiLogOut />
          </div>
        </section>
        <h2 className="list__heading">Here your wishes :)</h2>
        <div className="filter">
          <label htmlFor="date" className="filter__label"></label>
          <input
            type="date"
            id="date"
            className="filter__input input-limitDate"
            placeholder="Search by limit date :)"
            autoComplete="off"
            required
            value={""}
            onChange={() => {}}
          />
        </div>
        <ul className="list-wishes">
          {wishesList.map((wish) => (
            <li key={wish.title} className="list__item">
              <WishCard wish={wish} />
            </li>
          ))}
        </ul>
        <Button
          buttonText="Create wish"
          type="submit"
          classNameTypeButton="button button--big"
          actionOnclick={() => {}}
          isDisable={isDisabled}
        />
      </WishesListStyled>
    </>
  );
};

export default WishesList;
