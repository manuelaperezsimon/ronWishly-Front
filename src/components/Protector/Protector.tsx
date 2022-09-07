import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectorProps {
  children: JSX.Element;
}

const Protector = ({ children }: ProtectorProps): JSX.Element => {
  const token = useAppSelector((state) => state.users.token);
  const navigate = useNavigate();
  const hasToken = token === "" ? false : true;

  useEffect(() => {
    if (!hasToken) {
      navigate("/login");
    }
  }, [hasToken, navigate]);

  return hasToken ? children : <></>;
};
export default Protector;
