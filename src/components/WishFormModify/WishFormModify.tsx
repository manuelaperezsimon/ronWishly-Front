import { SyntheticEvent, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { IWish } from "../../store/interfaces/wishesInterfaces";
import Button from "../Button/Button";
import WishFormModifyStyled from "./WishFormModifyStyled";

let formData = new FormData();

interface WishFormModifyProps {
  wish: IWish;
}

const WishFormModify = ({ wish }: WishFormModifyProps): JSX.Element => {
  const { modifyWish } = useApi();
  const [wishEdit, setWishEdit] = useState(wish);

  useEffect(() => {
    setWishEdit({ ...wish, limitDate: new Date(wish.limitDate), picture: "" });
  }, [wish]);

  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWishEdit({ ...wishEdit, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append("wish", JSON.stringify({ ...wishEdit }));

    await modifyWish(formData, id!);

    setWishEdit(wish);
    formData = new FormData();
    navigate("/wishes");
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("picture", event.target.files![0]);
    onChangeData(event);
  };

  const [date, setDate] = useState("");

  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setWishEdit({ ...wishEdit, limitDate: new Date(event.target.value) });
  };

  const hasOneEmptyField =
    wishEdit.title.length < 1 ||
    wishEdit.limitDate.toDateString().length < 1 ||
    wishEdit.description.length < 1;

  const navigateToWishList = () => {
    navigate("/wishes");
  };
  return (
    <>
      <WishFormModifyStyled>
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
        <h2 className="form__heading">Modify your Wish!</h2>
        <form
          action=""
          className="form-modify"
          noValidate
          onSubmit={onSubmitData}
          data-testid="form"
        >
          <div className="inputs-modify__group">
            <div className="form-modify__group">
              <label htmlFor="title" className="form__label"></label>
              <input
                type="text"
                id="title"
                className="form-modify__input input-title"
                placeholder="THE title for your wish:)"
                autoComplete="off"
                required
                value={wishEdit.title}
                onChange={onChangeData}
              />
            </div>
            <div className="form-modify__group">
              <label htmlFor="picture" className="form__label"></label>
              <input
                type="file"
                id="picture"
                className="form-modify__input input-file"
                placeholder="In a picture, your fantasy!"
                autoComplete="off"
                required
                value={wishEdit.picture}
                onChange={onChangeFile}
              />
            </div>
            <div className="form-modify__group">
              <label htmlFor="date" className="form__label"></label>
              <input
                type="date"
                id="date"
                className={`form-modify__input`}
                placeholder="Put a limit date"
                autoComplete="off"
                required
                value={date}
                onChange={onChangeDate}
              />
            </div>
            <div className="form-modify__group">
              <label htmlFor="description" className="form__label"></label>
              <input
                type="text"
                id="description"
                className={`form-modify__input`}
                placeholder="Describe your adventure"
                autoComplete="off"
                required
                value={wishEdit.description}
                onChange={onChangeData}
              />
            </div>
          </div>

          <Button
            buttonText="Modify wish"
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasOneEmptyField}
          />
        </form>{" "}
      </WishFormModifyStyled>
    </>
  );
};

export default WishFormModify;
