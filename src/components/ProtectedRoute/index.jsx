import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";
import { useNavigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  // Invoca a função useAuth() para ambas as variáveis
  const { isAuthenticated, isLoading } = useAuth();

  const navigate = useNavigate();
  // Se o usuário não estiver autenticado E não estiver carregando, direciona ele para 'auth/login'
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // redirect /auth/login
      navigate("/auth/login");
    }
    // Sempre que um dos três [isAuthenticated, isLoading] alterar seu valor, ele executa a função acima.
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    // Se estiver carregando, demonstra o elemento de Spinner (info visual para carregando)
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }
  return children;
};
