import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

// Um componente literalmente para fazer a rota de Logout
export const Logout = () => {
  // chama o hook de antenticação, mas apenas o método de logout
  const { logout } = useAuth();
  // habilita a navegação
  const navigate = useNavigate();

  //useEffect: Se algerar alguma coisa em logout ou em navigate, faça logout e navegue para "/auth/login"
  useEffect(() => {
    logout();
    navigate("/auth/login");
  }, [logout, navigate]);
  return null;
};
