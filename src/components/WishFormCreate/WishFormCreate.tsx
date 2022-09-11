import { SyntheticEvent, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { wishesReducer } from "../../store/features/wishes/slices/wishesSlice";
import { IWish } from "../../store/interfaces/wishesInterfaces";
import Button from "../Button/Button";
import WishFormStyled from "./WishFormStyled";

let formData = new FormData();

const WishFormCreate = (): JSX.Element => {
  const initialState: IWish = {
    title: "",
    picture: "",
    limitDate: new Date(),
    description: "",
  };
  const { createWish } = useApi();
  const [formWishData, setFormWishData] = useState(initialState);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormWishData({ ...formWishData, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append(
      "wish",
      JSON.stringify({
        title: formWishData.title,
        limitDate: formWishData.limitDate,
        description: formWishData.description,
      })
    );

    await createWish(formData);

    setFormWishData(initialState);
    formData = new FormData();
    navigate("/wishes");
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("picture", event.target.files![0]);
    onChangeData(event);
  };

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setFormWishData({
      ...formWishData,
      limitDate: new Date(event.target.value),
    });
  };

  const hasOneEmptyField =
    formWishData.title.length < 1 ||
    formWishData.limitDate.toDateString().length < 1 ||
    formWishData.description.length < 1;

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
        <h2 className="form__heading">Create your Wish!</h2>
        <form
          action=""
          className="form-create"
          noValidate
          onSubmit={onSubmitData}
          data-testid="form"
        >
          <div className="inputs-create__group">
            <div className="form-create__group">
              <label htmlFor="title" className="form__label"></label>
              <input
                type="text"
                id="title"
                className="form-create__input input-title"
                placeholder="THE title for your wish:)"
                autoComplete="off"
                required
                value={formWishData.title}
                onChange={onChangeData}
              />
            </div>
            <div className="form-create__group">
              <label htmlFor="picture" className="form__label"></label>
              <input
                type="file"
                id="picture"
                className="form-create__input input-file"
                placeholder="In a picture, your fantasy!"
                autoComplete="off"
                required
                value={formWishData.picture}
                onChange={onChangeFile}
              />
            </div>
            <div className="form-create__group">
              <label htmlFor="date" className="form__label"></label>
              <input
                type="date"
                id="date"
                className={`form-create__input`}
                placeholder="Put a limit date"
                autoComplete="off"
                required
                value={date}
                onChange={onChangeDate}
              />
            </div>
            <div className="form-create__group">
              <label htmlFor="description" className="form__label"></label>
              <input
                type="text"
                id="description"
                className={`form-create__input`}
                placeholder="Describe your adventure"
                autoComplete="off"
                required
                value={formWishData.description}
                onChange={onChangeData}
              />
            </div>
          </div>

          <Button
            buttonText="Create wish"
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

export default WishFormCreate;
