import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const Protector = ({ children }: ProtectorProps): JSX.Element => {
  const hasToken = useAppSelector((state) => state.users.token);

  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};
export default Protector;
