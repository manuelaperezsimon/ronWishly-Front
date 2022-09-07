import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const Protector = ({ children }: ProtectorProps): JSX.Element => {
  const hasToken = useAppSelector((state) => state.users.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasToken) {
      navigate("/login");
    }
  }, [hasToken, navigate]);

  return <>{hasToken && children}</>;
};
export default Protector;
