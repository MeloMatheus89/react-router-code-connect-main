import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";
import { useNavigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // redirect /auth/login
    navigate("/auth/login")


    }
    // Sempre que um dos dois [isAuthenticated, isLoading] alterar seu valor, ele executa a função acima.
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }
  return { children };
};
