import { SyntheticEvent, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { NewOrModifyWish } from "../../store/interfaces/wishesInterfaces";
import Button from "../Button/Button";
import WishFormStyled from "./WishFormStyled";

interface WishFormProps {
  initialState: NewOrModifyWish;
}

let formData = new FormData();

const WishForm = ({ initialState }: WishFormProps): JSX.Element => {
  const { createWish } = useApi();
  const [newWish, setNewWish] = useState(initialState);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWish({ ...newWish, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (initialState.id) {
    } else {
      await createWish(newWish);
    }
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("picture", event.target.files![0]);
    onChangeData(event);
  };

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setNewWish({ ...newWish, limitDate: new Date(event.target.value) });
  };

  const hasOneEmptyField =
    newWish.title.length < 1 ||
    newWish.limitDate.toDateString().length < 1 ||
    newWish.description.length < 1;

  const navigateToWishList = () => {
    navigate("/wishes");
  };

  return (
    <>
      <WishFormStyled>
        <section className="header-container">
          <img
            src="/img/circles.png"
            alt="two circles yellow"
            className="circles__picture circles__picture--big"
            width={"80px"}
          />

          <IoIosClose
            className="icon--close"
            data-testid="icon-close"
            onClick={navigateToWishList}
          />
        </section>
        <h2 className="form__heading">
          {newWish.id ? "Modify your wish!" : "Create your Wish!"}
        </h2>
        <form
          action=""
          className="form"
          noValidate
          onSubmit={onSubmitData}
          data-testid="form"
        >
          <div className="form__group">
            <label htmlFor="title" className="form__label"></label>
            <input
              type="text"
              id="title"
              className="form__input input-title"
              placeholder="THE title for your wish:)"
              autoComplete="off"
              required
              value={newWish.title}
              onChange={onChangeData}
            />
          </div>
          <div className="form-register__group">
            <label htmlFor="picture" className="form__label"></label>
            <input
              type="file"
              id="picture"
              className={`form__input input-file `}
              placeholder="In a picture, your fantasy!"
              autoComplete="off"
              required
              value={newWish.picture}
              onChange={onChangeFile}
            />
          </div>
          <div className="form__group">
            <label htmlFor="date" className="form__label"></label>
            <input
              type="date"
              id="date"
              className={`form__input`}
              placeholder="Put a limit date"
              autoComplete="off"
              required
              value={date}
              onChange={onChangeDate}
            />
          </div>
          <div className="form__group">
            <label htmlFor="description" className="form__label"></label>
            <input
              type="text"
              id="description"
              className={`form__input input-repeat-password`}
              placeholder="Describe your adventure"
              autoComplete="off"
              required
              value={newWish.description}
              onChange={onChangeData}
            />
          </div>
          <Button
            buttonText={newWish.id ? "Modify wish" : "Create wish"}
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasOneEmptyField}
          />
        </form>{" "}
      </WishFormStyled>
    </>
  );
};

export default WishForm;