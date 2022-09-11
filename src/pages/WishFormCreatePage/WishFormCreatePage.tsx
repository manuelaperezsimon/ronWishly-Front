import { useParams } from "react-router-dom";
import WishFormCreate from "../../components/WishFormCreate/WishFormCreate";
import WishForm from "../../components/WishFormCreate/WishFormCreate";
import { useAppSelector } from "../../store/hooks";
import {
  IdWish,
  NewOrModifyWish,
} from "../../store/interfaces/wishesInterfaces";

const WishFormPage = (): JSX.Element => {
  return <WishFormCreate />;
};

export default WishFormPage;
