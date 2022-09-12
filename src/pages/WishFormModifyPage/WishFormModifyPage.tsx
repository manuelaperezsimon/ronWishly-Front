import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishFormModify from "../../components/WishFormModify/WishFormModify";
import useApi from "../../hooks/useApi/useApi";
import { IWish } from "../../store/interfaces/wishesInterfaces";

const initialState: IWish = {
  title: "",
  limitDate: new Date(),
  picture: "",
  description: "",
};

const WishFormModifyPage = (): JSX.Element => {
  const { id } = useParams();
  const [wish, setWish] = useState(initialState);
  const { getWishById } = useApi();

  useEffect(() => {
    (async () => {
      const wish = await getWishById(id!);
      setWish(wish);
    })();
  }, [getWishById, id]);

  return <WishFormModify wish={wish} />;
};

export default WishFormModifyPage;
