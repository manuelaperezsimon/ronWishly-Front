import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
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

  const [date, setDate] = useState("");

  useEffect(() => {
    getAllWishes();
  }, [getAllWishes]);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  if (wishesList.length === 0) {
    return (
      <>
        <WishesListStyled>
          <section className="header__container">
            <img
              src="img/circles.png"
              alt="two circles yellow"
              className="circles__picture circles__picture--big"
              width={"80px"}
            />
            <div className="icon__logout">
              <BiLogOut />
            </div>
          </section>
          <div className="container">
            <h2 className="list__heading">Don't you have any wish yet?</h2>
            <Button
              buttonText="Create wish"
              type="submit"
              classNameTypeButton="button button--big"
              actionOnclick={() => {}}
              isDisable={isDisabled}
            />
          </div>
        </WishesListStyled>
      </>
    );
  }

  return (
    <WishesListStyled>
      <section className="header__container">
        <img
          src="img/circles.png"
          alt="two circles yellow"
          className="circles__picture circles__picture--small"
          width={"80px"}
        />
        <div className="icon__logout">
          <BiLogOut />
        </div>
      </section>
      <h2 className="list__heading">Here are your wishes :)</h2>
      <div className="filter">
        <label htmlFor="date" className="filter__label">
          Search by limit date:
        </label>
        <input
          type="date"
          id="date"
          className="filter__input input-limitDate"
          placeholder="Search by limit date :)"
          autoComplete="off"
          required
          value={date}
          onChange={onChangeData}
        />
      </div>
      <ul className="list-wishes">
        {wishesList.map((wish) => (
          <li key={wish.title} className="list__item">
            <WishCard wish={wish} />
          </li>
        ))}
      </ul>
      <div className="container__button">
        <Button
          buttonText="Create wish"
          type="submit"
          classNameTypeButton="button button--big"
          actionOnclick={() => {}}
          isDisable={isDisabled}
        />
      </div>
    </WishesListStyled>
  );
};

export default WishesList;
