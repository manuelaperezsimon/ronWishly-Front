import { useParams } from "react-router-dom";
import WishForm from "../../components/WishForm/WishForm";
import { useAppSelector } from "../../store/hooks";
import {
  IdWish,
  NewOrModifyWish,
} from "../../store/interfaces/wishesInterfaces";

const WishFormPage = (): JSX.Element => {
  const wishes = useAppSelector((state) => state.wishes);
  const { id } = useParams();

  const wishToModifyOrCreate: NewOrModifyWish =
    wishes && id
      ? (wishes.find((wish) => id === wish.id) as IdWish)
      : {
          title: "",
          picture: "",
          limitDate: new Date(),
          description: "",
        };

  return <WishForm initialState={wishToModifyOrCreate} />;
};

export default WishFormPage;
