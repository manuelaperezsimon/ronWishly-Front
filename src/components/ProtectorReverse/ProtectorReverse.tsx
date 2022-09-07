import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectorReverseProps {
  children: JSX.Element;
}

const ProtectorReverse = ({ children }: ProtectorReverseProps) => {
  const token = useAppSelector((state) => state.users.token);
  const navigate = useNavigate();

  const hasToken = token === "" ? false : true;
  useEffect(() => {
    if (hasToken) {
      navigate("/wishes");
    }
  }, [hasToken, navigate]);

  return !hasToken ? children : <></>;
};

export default ProtectorReverse;
