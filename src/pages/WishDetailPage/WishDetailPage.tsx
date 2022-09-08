import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishDetail from "../../components/WishDetail/WishDetail";
import useApi from "../../hooks/useApi/useApi";
import { IdWish } from "../../store/interfaces/wishesInterfaces";

const initialState: IdWish = {
  id: "",
  title: "",
  picture: "",
  limitDate: new Date(),
  description: "",
};

const WishDetailsPage = (): JSX.Element => {
  const [wish, setWish] = useState(initialState);
  const { getWishById } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const wish = await getWishById(id as string);
      setWish(wish);
    })();
  }, [getWishById, id]);

  return (
    <>
      <WishDetail wish={wish} />
    </>
  );
};

export default WishDetailsPage;
